import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import {useParams} from "react-router-dom"
import {db} from "../firebase/firebase"
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

  const {categories} = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true)

        const productsCollection =collection(db, "productos");
        const filtro = categories && query(productsCollection, where("category", "==", categories));
        const datos = categories ? await getDocs(filtro) : await getDocs(productsCollection);
  
        const result = datos.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        })

        setProducts(result)
      } catch (error) {
        setProducts(error)
        console.log(error)
      } finally {
        setLoading(false);
        console.log(products)
      }
    }
    getItems()
  }, [categories]);

  return (
    <>
      <h2>Bienvenido/a {greeting}</h2>
      {loading
        ? (<><h2>Cargando...</h2>
          <PulseLoader size={10} color="#157A6E" cssOverride={{ margin: "2em" }} /></>)
        : Array.isArray(products)
        ? <ItemList items={products} />
        : <h2 className="Error">Ha ocurrido un error interno, por favor reiniciar</h2>}
    </>
  )
}

export default ItemListContainer