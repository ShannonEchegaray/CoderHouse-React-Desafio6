import React, {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const add = () => {
        counter < stock && setCounter(counter + 1);
    }

    const substract = () => {
        counter > 1 && setCounter(counter - 1);
    }

  return (
    <div className='divContador'>
        <div className='contador'>
          <button onClick={() => substract()}>-</button>
          <h4>{counter}</h4>
          <button onClick={() => add()}>+</button>
        </div>
        <button className="contadorBoton" onClick={() => onAdd(counter, stock)} disabled={stock === 0 && "true"}>Agregar al Carrito</button>
        {stock === 0 && <p className="error">*No hay stock disponible</p>}
    </div>
  )
}

export default ItemCount