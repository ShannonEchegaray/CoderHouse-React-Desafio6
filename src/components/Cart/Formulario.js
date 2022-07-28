import React, { useState } from 'react'
import "./Formulario.css"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"


const Formulario = ({finalizar}) => {

    const [data, setData] = useState({name: "", apellido: "", email: ""})

    console.log(data)

  return (
    <form>
        <TextField required value={data.name} onChange={(e) => setData({...data, name: e.target.value})} style={{display:"block", margin: "5px 0px"}} label="Nombre" variant="standard"/>
        <TextField required value={data.apellido} onChange={(e) => setData({...data, apellido: e.target.value})} style={{display:"block", margin: "5px 0px"}} label="Apellido" variant="standard"/>
        <TextField required value={data.email} onChange={(e) => setData({...data, email: e.target.value})} style={{display:"block", margin: "5px 0px"}} label="E-Mail" variant="standard"/>
        <Button onClick={() => finalizar(data)} variant='contained' color='success'>Confirmar</Button>
    </form>
  )
}

export default Formulario