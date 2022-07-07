import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import PulseLoader from "react-spinners/PulseLoader";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("./producto.json");
            const datos = await response.json();
            resolve(datos)
          } catch (error) {
            reject(error)
          }  
        });
      }, 2000);
        
    }

    getItem()
      .then(items => {
        setProduct(items);
        console.log(items);
        setLoading(false);
      })
      .catch(error => setProduct(new Error(error)))
    
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