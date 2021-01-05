import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert';
import { AuthContext } from '../../../auth/authContext';
import MSearch from './MSearch'
import MTabla from './MTabla'

const Metodologia = () => {
    const { user } = useContext(AuthContext);
    const [nombre, setNombre] = useState('')
    const [metodologias, setMetodologias] = useState([])
   
    const listMetodologias = () => {
        console.log(user.token)
        Axios.get('http://127.0.0.1:3000/metodologias',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            setMetodologias(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const onDelete = (id) => {        
        Axios.delete(`http://127.0.0.1:3000/metodologias/${id}`,{
            headers: {
                auth: user.token
              }
        }).then( async ()=>{            
            await listMetodologias()
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            METnombre:nombre,
            METestado:true,
        }
        Axios.post('http://127.0.0.1:3000/metodologias',data,{
            headers: {
                auth: user.token
              }
        }).then( async ()=>{
            swal("Guardado!!", "Metodologia guardada!", "success");
            await listMetodologias()
        })
    }
    useEffect(() => {
        console.log("aea")
        listMetodologias()
    }, [])
    return (
        <div>
            <div  style={{backgroundColor:'white',padding:"3%"}}>
            <h1>Datos de metodologia</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                    <label htmlFor="Nombre">Ingrese el nombre de la metodologia</label>
                    <div style={{display:"flex"}}>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre de la metodologia" required onChange={e=>{
                        setNombre(e.target.value)
                    }}/>                    
                    <button className="btn btn-success">Guardar</button>
                    </div>
                </div>
                
              
            </form>
            </div>
            <div style={{backgroundColor:'white',padding:"2%"}}>
            <MSearch/>
            </div>
            <br></br>
            <div style={{backgroundColor:'white',padding:"2%"}}>
                <MTabla rows={metodologias} onDelete={onDelete}/>
                </div>
        </div>
    )
}

export default Metodologia
