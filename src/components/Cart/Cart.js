import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { contexto } from "../CartContext"
import ItemCart from './ItemCart'
import "./Cart.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip'

const Cart = () => {

  const { items, removerItem, calcularTotal, limpiar } = useContext(contexto)

  const borrarItem = (itemId) => {
    removerItem(itemId)
  }

  return (
    <div className='CarritoContainer'>
      {items.length != 0
        ? (<table className='TablaCarrito'>
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Cantidad</td>
                <td>
                  <Tooltip title="Limpiar Carrito" placement='right'>
                    <a className='BotonCarrito' onClick={() => limpiar()}>
                      <DeleteOutlineIcon />
                    </a>
                  </Tooltip>
                </td>
              </tr>
            </thead>
          <tbody>
            {items.map(el => <ItemCart key={el.id} item={el} borrarItem={borrarItem} />)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>${calcularTotal()}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>)
        : <h4>No hay productos en el carrito <br />
          vaya a comprar mas <Link className='a' style={{fontWeight: "800"}} to="/">Aqui</Link></h4>
      }

    </div>
  )
}

export default Cart; 