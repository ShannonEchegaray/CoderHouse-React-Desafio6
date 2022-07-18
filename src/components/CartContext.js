import React, {createContext, useState} from 'react'

export const contexto = createContext();
const {Provider} = contexto;

const CartContext = ({children}) => {

    const [items, setItems] = useState([])

    const agregarItem = (item) => {
      let {id, qty, stock} = item;
      if(estaEnLista(id)){
        let cart = [...items]
        let cartItem = cart.find(el => el.id === id);
        cartItem.qty += qty;
        cart[cart.indexOf(cartItem)] = cartItem;
        cartItem.qty <= stock? setItems(cart): console.log("La cantidad ingresada supera el stock")
      } else {
        setItems([...items, item])
      }
    }

    const removerItem = (itemId) => {
      setItems([...items].filter(el => el.id != itemId))
    }

    const limpiar = () => {
      setItems([])
    }

    const calcularTotal = () => {
      return items.reduce((acc, el) => acc + (el.qty * el.price), 0)
    }

    const articulosObtenidos = () => {
      return items.length;
    }

    const estaEnLista = (id) => {
      return items.some(el => el.id == id)
    }


  return (
    <Provider value={{items, agregarItem, removerItem, limpiar, calcularTotal, articulosObtenidos}}>
        {children}
    </Provider>
  )
}

export default CartContext