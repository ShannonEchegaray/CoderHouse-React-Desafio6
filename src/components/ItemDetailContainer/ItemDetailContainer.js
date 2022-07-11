import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import PulseLoader from "react-spinners/PulseLoader";
import "./ItemDetailContainer.css";
import {productos} from "../../data/productos"
import {useParams} from "react-router-dom";

const promise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        res(productos);
    }, 2000);
  });
}

const ItemDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      try {
        const datos = await promise();
        const filtro = datos.filter(el => el.id === id)
        setProduct(filtro[0]);
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