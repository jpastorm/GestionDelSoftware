import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { AuthContext } from '../../../auth/authContext'
import ESearch from './ESearch'
import ETabla from './ETabla'

const Etapa = () => {
    const { user } = useContext(AuthContext);
    const [nombre, setNombre] = useState('')
    const [metodologias, setMetodologias] = useState([])
    const [etapas, setEtapa] = useState([])
    const [metodologiaID, setMetodologiaID] = useState('')
    const [nombreEtapa, setNombreEtapa] = useState('') 
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
        console.log(user.token)
        Axios.delete(`http://127.0.0.1:3000/etapas/${id}`,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            await listEtapas()
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        
        const data = {
            "ETAnombre":nombre,
            "met":parseInt(metodologiaID)
        }
        console.log(data)
        Axios.post('http://127.0.0.1:3000/etapas',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            swal("Registro Creado!", "Guardado con exito!", "success");
            console.log(response.data)
            await listEtapas()
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listMetodologias()
        listEtapas()
    }, [])
    return (
        <div >
            <h1>Datos de Etapa</h1>
            <form onSubmit={onSubmit} style={{display:"flex",justifyContent:"space-between",backgroundColor:'white',padding:'2%'}}>
                            
            <div style={{display:"flex",flexDirection:"column",width:"70%",marginBottom:"2rem"}}>
            <label>Metodologia</label>
            <select class="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setMetodologiaID(option)
            }}>
            <option selected>Seleccione uno</option>
            {
                metodologias.map(met=>{
                    return(
                    <option key={met.id} id={met.id}>{met.METnombre}</option>
                    )
                })
            }
            </select>
            <label>Nombre de Etapa</label>
            <input type="text" placeholder="nombre de etapa" className="form-control" required onChange={e=>{
                setNombre(e.target.value)
            }}/>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
            <button type="submit" className="btn btn-success" style={{height:"50%"}}>Guardar</button>
            </div>
            </form>
            <ESearch/>
            <br></br>
            <div style={{backgroundColor:'white',padding:'2%'}}>
            <ETabla rows={etapas} onDelete={onDelete}/>
            </div>
        </div>
        )
    }
    
    export default Etapa
    