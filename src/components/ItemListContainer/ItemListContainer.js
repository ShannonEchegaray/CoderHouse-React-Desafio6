import "./ItemListContainer.css";
import ItemCount from "../itemCount/ItemCount";
import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import {data} from "../productos";

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
            const response = await fetch(data);
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        }, 2000)
        
    }, []);

  return (
    <>
      <h2>Bienvenido/a {greeting}</h2>
      {loading? <h2>Cargando...</h2> : <ItemList items={products} />}
      <ItemCount
      stock={20} initial={1} onAdd={onAdd}
      />
    </>
  )
}

export default ItemListContainer