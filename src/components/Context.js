import React, {createContext, useState} from 'react'

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({children}) => {

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
      console.log(items)
    }

    const removerItem = (itemId) => {
      [...items].splice(items.indexOf(items.find(el => el.id == itemId)), 1)
    }

    const limpiar = () => {
      setItems([])
    }

    const estaEnLista = (id) => {
      return items.some(el => el.id == id)
    }


  return (
    <Provider value={{items, agregarItem, removerItem, limpiar}}>
        {children}
    </Provider>
  )
}

export default CustomProvider