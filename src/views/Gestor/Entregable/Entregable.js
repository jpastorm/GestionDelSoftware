import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert';
import { AuthContext } from '../../../auth/authContext';
import ESearch from './ESearch'
import ETabla from './ETabla'

const Entregable = () => {
    const { user } = useContext(AuthContext);
    const [etapa, setEtapa] = useState([])
    const [entregables, setEntregables] = useState([])
    const [etapaID, setEtapaID] = useState('')
    const [nombreEntregable, setNombreEntregable] = useState('')

    const listEntregables = () => {
        console.log(user.token)
        Axios.get('http://127.0.0.1:3000/entregables',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            setEntregables(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const listEtapas = () => {
        console.log(user.token)
        Axios.get('http://127.0.0.1:3000/etapas',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            setEtapa(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const onDelete = (id) => {
        console.log(user.token)
        Axios.delete(`http://127.0.0.1:3000/entregables/${id}`,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            await listEntregables()
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user.token)
        const data = {
            "ETGnombre":nombreEntregable,
            "eta": parseInt(etapaID)
        }
        console.log(data)
        Axios.post('http://127.0.0.1:3000/entregables',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            swal("Registro Creado!", "Guardado con exito!", "success");
            console.log(response.data)
            await listEntregables()
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listEtapas()
        listEntregables()
    }, [])
    return (
        <div>
            <h1>Datos de Entregable</h1>
            <div style={{backgroundColor:'white',padding:'2%'}}>
            <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column",marginBottom:"1rem",width:"100%"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                    <label>Etapas</label>
            <select class="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setEtapaID(option)
            }}>
            <option selected>Seleccione uno</option>
            {
                etapa.map(et=>{
                    return(
                    <option key={et.id} id={et.id}>{et.ETAnombre}</option>
                    )
                })
            }
            </select>             
                    </div>
                    <div style={{width:"60%"}}>
                        <label>Nombre de Entregable</label>
                        <div className="form-group" >
                        <input className="form-control" placeholder="Nombre del entregable" required onChange={e=>{
                            setNombreEntregable(e.target.value)
                        }}/>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom:"2rem",display:"flex",justifyContent:"space-between"}}>                        
                        <div style={{display:"flex",alignItems:"center"}}>
                        <button type="submit" className="btn btn-success" style={{height:"100%"}}>Guardar</button>
                        </div>
                </div>
                
            </form>
            </div>
            <ESearch/>
            <br></br>
            <div style={{backgroundColor:'white',padding:'2%'}}>
            <ETabla rows={entregables} onDelete={onDelete}/>
            </div>
        </div>
    )
}

export default Entregable
