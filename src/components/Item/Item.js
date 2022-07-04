import React from 'react'
import "./Item.css"

const Item = ({item}) => {
  return (
    <div className="Item">
        <div className="ItemImg">
            <img src={item.img} alt={item.alt} />
        </div>
        <div>
            <p className="ItemTitle">{item.name}</p>
            <p className="ItemPrice">Precio: ${item.price}</p>
        </div>
    </div>
  )
}

export default Item