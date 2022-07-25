import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom"
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css"
import {contexto} from "../CartContext"

const ItemDetail = ({item}) => {

  const {agregarItem} = useContext(contexto)

  const [purchase, setPurchase] = useState(false)

    const onAdd = (counter, stock) => {
        if (counter <= stock) {
          agregarItem({...item, qty: counter})
          setPurchase(true)
        } else {
          alert("No hay stock disponible. \nEl Stock disponible es de " + stock);
        }
      }

  return (
    <div className="ItemDetail">
        <div className="ItemDetailImg">
            <img src={item.image} alt={item.alt} />
        </div>
        <div className="ItemDetails">
            <p className="ItemDetailTitle">{item.name}</p>
            <p className="ItemDetailDescription">{item.description}</p>
            <p className="ItemDetailPrice">Precio: ${item.price}</p>
            {
              purchase 
              ? <Link className='contadorBoton' to="/cart">Finalizar Compra</Link>
              : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            }
            
        </div>
    </div>
  )
}

export default ItemDetail