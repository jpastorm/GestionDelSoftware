import Axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert';

const PCreateCliente = ({user,list}) => {



    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [constrasenia, setConstrasenia] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            "USUCodigo":parseInt(codigo),
            "USUnombre":nombre,
            "USUApellido":apellido,
            "USUtipo":5,
            "USUemail":email,
            "USUcontrasenia":constrasenia,
            "USUestado":1,
            "rol":1
        }
        console.log(data)
        Axios.post('http://127.0.0.1:3000/users',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)  
            swal("Registro Creado!", "Nuevo Cliente Creado", "success");
            await list()
            swal.close()        
        }).catch(e=>{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
            console.log(e)
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit} style={{textAlign:'left'}}>
                <div className="form-group">
                    <label>Codigo :</label>
                    <input className="form-control" type="text" placeholder="codigo"  value={codigo} required onChange={e=>{
                           const re = /^[0-9\b]+$/;
                           // if value is not blank, then test the regex                       
                           if (e.target.value === '' || re.test(e.target.value)) {
                              setCodigo(e.target.value)
                           }
                        
                    }}/>
                </div>
                <div className="form-group">
                    <label>Nombres :</label>
                    <input className="form-control" type="text" placeholder="Nombres" required onChange={e=>{
                        setNombre(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label>Apellidos :</label>
                    <input className="form-control" type="text" placeholder="Apellidos" required onChange={e=>{
                        setApellido(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label>Correo :</label>
                    <input className="form-control" type="text" placeholder="Correo" required onChange={e=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label>Contraseña :</label>
                    <input className="form-control" type="password" placeholder="Contraseña" required onChange={e=>{
                        setConstrasenia(e.target.value)
                    }}/>
                </div>
                <button type="submit" className="btn btn-success btn-block" style={{padding:'0.5rem'}}><strong style={{fontSize:'2rem'}}>Guardar</strong></button>
            </form>
        </div>
    )
}

export default PCreateCliente
