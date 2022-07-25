import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import PulseLoader from "react-spinners/PulseLoader";
import "./ItemDetailContainer.css";
import {productos} from "../../data/productos"
import {useParams} from "react-router-dom";
import {db} from "../firebase/firebase"
import {collection, getDoc, doc} from "firebase/firestore"



const ItemDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      
      try {
        setLoading(true);
        const productsCollection = collection(db, "productos");
        const datos = await getDoc(await doc(productsCollection, id));
        const result = {...datos.data(), id: datos.id};
        setProduct(result);
      } catch (error) {
        setProduct(new Error(error))
      } finally {
        setLoading(false);
      }
    }

    getItem();    
  }, []);

  return (
    <div className='ItemDetailContainer'>
      {loading
        ? (<><h2>Cargando...</h2>
          <PulseLoader size={10} color="#157A6E" cssOverride={{ margin: "2em" }} /></>)
        :<ItemDetail item={product} />}
    </div>
  )
}

export default ItemDetailContainer