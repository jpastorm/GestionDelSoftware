import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert';
import { AuthContext } from '../../../auth/authContext';
import UTabla from './UTabla'

const Usuarios = () => {
    const { user } = useContext(AuthContext);
    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [tipo, setTipo] = useState('')
    const [email, setEmail] = useState()
    const [contrasenia, setContrasenia] = useState('')
    const [usuarios, setUsuarios] = useState([])
    const listUsuarios = () =>{
        Axios.get('http://127.0.0.1:3000/users',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            setUsuarios(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const onDelete=(id)=>{
        Axios.delete(`http://127.0.0.1:3000/users/${id}`,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            await listUsuarios()
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            "USUCodigo":parseInt(codigo),
            "USUnombre":nombre,
            "USUApellido":apellido,
            "USUtipo":parseInt(tipo),
            "USUemail":email,
            "USUcontrasenia":contrasenia,
            "USUestado":1,
            "rol":1
        }
        Axios.post('http://127.0.0.1:3000/users',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            swal("Guardado!!", "Metodologia guardada!", "success");
            await listUsuarios()
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listUsuarios()
    }, [])
    return (
        <div>
            <h1>Datos de Usuarios</h1>
            <form onSubmit={onSubmit} style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',backgroundColor:'white',padding:'2%'}}>
                <div className="form-group" style={{width:'30%'}}>
                <label><strong>Tipo de usuario : </strong></label>
                    <select className="form-control" onChange={e=>{
                          let index = e.target.selectedIndex;
                          let el = e.target.childNodes[index]
                          let option =  el.getAttribute('id');  
                          console.log('Name, Code', e.target.value, option); 
                          setTipo(option)
                    }}>                        
                        <option>Seleccione uno</option>
                        <option id="2">Jefe de Proyecto</option>
                        <option id="3">Miembro</option>
                        <option id="4">Comite</option>
                        <option id="5">Cliente</option>
                    </select>
                </div>
                <div className="form-group" style={{width:'30%'}}>
                    <label><strong>Codigo : </strong></label>
                    <input className="form-control" placeholder="Numero de Contacto" required onChange={e=>{
                        setCodigo(e.target.value)
                    }}/>
                </div>
                <div className="form-group" style={{width:'30%'}}>
                    <label><strong>Nombre : </strong></label>
                    <input className="form-control" placeholder="Numero de Contacto" required onChange={e=>{
                        setNombre(e.target.value)
                    }}/>
                </div>
                <div className="form-group" style={{width:'30%'}}>
                    <label><strong>Apellido : </strong></label>   
                    <input className="form-control" placeholder="Numero de Contacto" required onChange={e=>{
                        setApellido(e.target.value)
                    }}/>
                </div>                
                <div className="form-group" style={{width:'30%'}}>
                <label><strong>Email : </strong></label>
                    <input className="form-control" placeholder="Numero de Contacto" required onChange={e=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="form-group" style={{width:'30%'}}>
                <label><strong>Contraseña : </strong></label>
                    <input className="form-control" placeholder="Numero de Contacto" required onChange={e=>{
                        setContrasenia(e.target.value)
                    }}/>
                </div>
                <div style={{textAlign:"center"}}>
                <button type="submit" className="btn btn-success" style={{fontSize:'2rem',padding:"1.2%",fontWeight:'bold'}}>Guardar</button>
            </div>
            </form>
           
            <div style={{backgroundColor:'white',padding:'4%'}}>
            <UTabla rows={usuarios} onDelete={onDelete} user={user} listUsuarios={listUsuarios}/>
            </div>
        </div>
    )
}

export default Usuarios
