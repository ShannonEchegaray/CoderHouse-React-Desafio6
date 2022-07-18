import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useContext} from 'react';
import {contexto} from "../CartContext"

const CartWidget = () => {

    const { articulosObtenidos } = useContext(contexto)

    return(
        <>
            <div className="CarritoNumero">
                <ShoppingCartIcon color="success" fontSize='large'/>
            </div>
        </>
    )
}

export default CartWidget;