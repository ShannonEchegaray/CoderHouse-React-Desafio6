import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import {productos} from "../../data/productos"
import {useParams} from "react-router-dom"

const promise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        console.log(productos)
        res(productos);
    }, 2000);
  });
}

const ItemListContainer = ({ greeting }) => {

  const {categories} = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true)
        const datos = await promise()
        const filtro = datos.filter(el => el.category == categories)
        setProducts(filtro);
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