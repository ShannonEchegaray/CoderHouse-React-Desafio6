import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useContext} from 'react';
import {contexto} from "../CartContext"

const CartWidget = () => {

    const { articulosObtenidos } = useContext(contexto)

    let cantidadArticulos = articulosObtenidos()

    return(
        <>
            <div className="CarritoNumero">
                {cantidadArticulos? <div className='numeroCarrito'>{cantidadArticulos}</div> : null}
                <ShoppingCartIcon color="success" fontSize='large'/>
            </div>
        </>
    )
}

export default CartWidget;