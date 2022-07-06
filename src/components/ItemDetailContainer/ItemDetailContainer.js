import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import PulseLoader from "react-spinners/PulseLoader";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch("./producto.json");
        const datos = await response.json();
        setProduct(datos);
      } catch (error) {
        setProduct(error)
        console.log(error)
      } finally {
        setLoading(false);
      }

    }, 2000)

  }, []);

  return (
    <div className='ItemDetailContainer'>
        {loading
              ? (<><h2>Cargando...</h2>
                <PulseLoader size={10} color="#157A6E" cssOverride={{margin: "2em"}} /></>)
              : <ItemDetail item={product}/>}
        
    </div>
  )
}

export default ItemDetailContainer