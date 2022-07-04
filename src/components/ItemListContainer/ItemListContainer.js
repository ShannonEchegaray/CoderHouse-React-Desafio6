import "./ItemListContainer.css";
import ItemCount from "../itemCount/ItemCount";
import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import {data} from "../../data/productos" 

const ItemListContainer = ({greeting}) => {

  const onAdd = (counter, stock) => {
    if(counter <= stock){
      alert("Se compro el producto");
    } else {
      alert("No hay stock disponible. \nEl Stock disponible es de " + stock);
    }
  }

  const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
          try{
            const response = await fetch(data);
            const datos = await response.json();
            setProducts(datos);
          } catch (error) {
            setProducts(error)
            console.log(error)
          } finally {
            setLoading(false);
          }
            
        }, 2000)
        
    }, []);

  return (
    <>
      <h2>Bienvenido/a {greeting}</h2>
      {loading
              ? (<><h2>Cargando...</h2>
                <PulseLoader size={10} color="#157A6E" cssOverride={{margin: "2em"}} /></>)
              : Array.isArray(products)
              ? <ItemList items={products} /> 
              : <h4 className="Error">Ha surgido un error interno, por favor reiniciar la pagina</h4>}
      <ItemCount
      stock={20} initial={1} onAdd={onAdd}
      />
    </>
  )
}

export default ItemListContainer