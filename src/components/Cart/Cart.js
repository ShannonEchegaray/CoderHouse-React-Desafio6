import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import { contexto } from "../CartContext"
import ItemCart from './ItemCart'
import "./Cart.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip'
import {db} from "../firebase/firebase"
import {collection, updateDoc ,doc, addDoc, getDoc, serverTimestamp} from "firebase/firestore"
import Formulario from './Formulario'

const Cart = () => {

  const { items, removerItem, calcularTotal, limpiar } = useContext(contexto)
  const [form, setForm] = useState(false)
  const [compra, setCompra] = useState(false)
  const [idVenta, setIdVenta] = useState("")

  const finalizarCompra = async (datoComprador) => {
    const ventasCollection = collection(db, "ventas");
    const refDoc = await addDoc(ventasCollection, {
      datosComprador: datoComprador,
      items: items,
      date: serverTimestamp(),
      total: calcularTotal()
    })

    const document = await (await getDoc(await doc(ventasCollection, refDoc.id)))
    setIdVenta(document.id)

    document.data().items.forEach( async (el) => {
      const documentoRef = doc(db, "productos", el.id)
      const documento = await getDoc(documentoRef)
      const producto = documento.data()
      console.log(producto)
      updateDoc(documentoRef, {stock: producto.stock - el.qty})
    })
    setCompra(true)
    limpiar()
  }

  console.log(compra)
  const borrarItem = (itemId) => {
    removerItem(itemId)
  }

  return (
    <div className='CarritoContainer'>
      {items.length !== 0
        ?
         (<><table className='TablaCarrito'>
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
              <td><button className='buttonCompra' onClick={() => setForm(true)}>Finalizar Compra</button></td>
            </tr>
          </tfoot>
        </table>
        {form ? <Formulario finalizar={finalizarCompra}/> : null}
        </>)
        : <h4>{idVenta ? `Gracias por comprar, su id es ${idVenta}`  : "No hay productos en el carrito"} <br />
          vaya a comprar mas <Link className='a' style={{fontWeight: "800"}} to="/">Aqui</Link></h4>
      }

    </div>
  )
}

export default Cart; 