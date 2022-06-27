import "./ItemListContainer.css";
import ItemCount from "../itemCount/ItemCount";
import React from "react";

const ItemListContainer = ({greeting}) => {

  const onAdd = (counter, stock) => {
    if(counter <= stock){
      alert("Se compro el producto");
    } else {
      alert("No hay stock disponible. \nEl Stock disponible es de " + stock);
    }
  }

  return (
    <>
      <h2>Bienvenido/a {greeting}</h2>
      <ul className="listaProductos">
        <li>Producto 1</li>
        <li>Producto 2</li>
        <li>Producto 3</li>
      </ul>
      <ItemCount
      stock={0} initial={1} onAdd={onAdd}
      />
    </>
  )
}

export default ItemListContainer