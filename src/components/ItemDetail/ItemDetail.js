import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

    const onAdd = (counter, stock) => {
        if (counter <= stock) {
          alert("Se compro el producto");
        } else {
          alert("No hay stock disponible. \nEl Stock disponible es de " + stock);
        }
      }

  return (
    <div className="ItemDetail">
        <div className="ItemDetailImg">
            <img src={item.img} alt={item.alt} />
        </div>
        <div className="ItemDetails">
            <p className="ItemDetailTitle">{item.name}</p>
            <p className="ItemDetailDescription">{item.description}</p>
            <p className="ItemDetailPrice">Precio: ${item.price}</p>
            <ItemCount stock={20} initial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail