import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom";

const Item = ({item}) => {
  return (
    <Link className='a' to={`/products/${item.category}/${item.id}`}>
      <div className="Item">
          <div className="ItemImg">
              <img src={item.img} alt={item.alt} />
          </div>
          <div>
              <p className="ItemTitle">{item.name}</p>
              <p className="ItemPrice">Precio: ${item.price}</p>
          </div>
      </div>
    </Link>
  )
}

export default Item