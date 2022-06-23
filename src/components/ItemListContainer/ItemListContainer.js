import "./ItemListContainer.css";
import React from "react";

const ItemListContainer = ({greeting}) => {

  return (
    <>
      <h2>Bienvenido/a {greeting}</h2>
      <ul className="listaProductos">
        <li>Producto 1</li>
        <li>Producto 2</li>
        <li>Producto 3</li>
      </ul>
    </>
  )
}

export default ItemListContainer