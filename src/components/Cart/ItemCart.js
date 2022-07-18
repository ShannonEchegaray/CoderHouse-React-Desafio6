import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./ItemCart.css"
import Tooltip from '@mui/material/Tooltip'

const ItemCart = ({item, borrarItem}) => {



  return (
    <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.qty}</td>
        <td>
            <Tooltip title="Borrar Articulo" placement='right'>
                <a className='BotonCarrito' onClick={() => borrarItem(item.id)}>
                    <DeleteOutlineIcon />
                </a>
             </Tooltip>
        </td>
    </tr>
  )
}

export default ItemCart