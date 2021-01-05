import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { AuthContext } from '../../../auth/authContext';
import PCreateCliente from './PCreateCliente';
import PTabla from './PTabla'
import swaldos from '@sweetalert/with-react'
const Proyectos = () => {
    
    const { user } = useContext(AuthContext);
    const [proyectos, setProyectos] = useState([])
    const [Nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    ///////////
    const [usu, setUsu] = useState('')//El usuario es el miembro
    const [pro, setPro] = useState('')//Este es el id del proyecto
    const [clienteID, setClienteID] = useState('')//Este es el id del cliente
    const [estadoID, setestadoID] = useState('')
    ////////////COMBOS
    const [metodologias, setMetodologias] = useState([])
    const [metodologiaID, setMetodologiaID] = useState('')
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
    const openModal = () => {
        swaldos(<PCreateCliente user={user} list={listUsuarios}/>)
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
    const listProyectos = () => {
        console.log(user.token)
        Axios.get('http://127.0.0.1:3000/proyectos/jefe/',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            setProyectos(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const listClientes = () => {
        const clientes = usuarios.filter(usu => usu.USUtipo == 5)
        console.log(clientes)
        return clientes
    }
    const listMiembros = () => {
        const miembros = usuarios.filter(usu => usu.USUtipo != 5 && usu.USUtipo != 1)
        return miembros
    }
    const getFecha = () => {
        let n =  new Date()
        //Año
        let y = n.getFullYear()
        //Mes
        let m = n.getMonth() + 1
        //Día
        let d = n.getDate()
        return y+"-"+m+"-"+d
    }
    const onSubmit = (e) => {   
        e.preventDefault()
        const data = {
            "PROnombre":Nombre,
            "PROdescripcion":descripcion,
            "PROestado":estadoID,
            "PROfechainicio":fechaInicio,
            "PROfechafin":fechaFin,
            "met":parseInt(metodologiaID)
        }
        console.log(data)
        Axios.post('http://127.0.0.1:3000/proyectos',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            const data = {
                "usu":parseInt(clienteID),
                "pro":response.data.idProyecto,
            }
            Axios.post('http://127.0.0.1:3000/usuariosProyectos',data,{
                headers: {
                    auth: user.token
                }
            }).then(response=>{
                console.log(response.data)                          
            }).catch(e=>{
                console.log(e)
            })
            ////////////////////////////////
            const datados = {
                "usu":parseInt(usu),
                "pro":response.data.idProyecto
            }
            Axios.post('http://127.0.0.1:3000/usuariosProyectos',datados,{
                headers: {
                    auth: user.token
                }
            }).then(response=>{
                console.log(response.data)                
                listProyectos()
            }).catch(e=>{
                console.log(e)
            })
            ////////////////////////////////
            swal("Registro Creado!", "Se creo el registro!", "success");
        }).catch(e=>{
            console.log(e)
        })
    }
    const onDelete = (id) => {
        Axios.delete(`http://127.0.0.1:3000/proyectos/${id}`,{
            headers: {
                auth: user.token
              }
        }).then(async (response)=>{
            console.log(response.data)
            await listProyectos()
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listUsuarios()
        listMetodologias()
        listProyectos()
        
    }, [])
    return (
        <div>
            <h1>Datos de proyectos</h1>
            <form onSubmit={onSubmit}>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',backgroundColor:'white',padding:'2%'}}>
            <div style={{width:'30%',display:'flex',flexDirection:'column'}}>
                    <div className="form-group">
                        <label><strong>Nombre de Proyecto :</strong></label>
                        <input type="text" placeholder="Nombre de Proyecto" className="form-control" required onChange={e=>{
                            setNombre(e.target.value)
                        }}/>
                    </div>
                    <div className="form-group">
                        <label><strong>Descripcion :</strong></label>
                        <textarea required className="form-control" onChange={e=>{
                            setDescripcion(e.target.value)
                        }}></textarea>
                    </div>
                </div>
                <div style={{width:'30%',display:'flex',flexDirection:'column'}}>
                    <div className="form-group">
                    <label><strong>Cliente</strong></label>
                        <div style={{display:'flex'}}>
                        
            <select class="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setClienteID(option)
            }}>
            <option selected>Seleccione uno</option>
            {
                listClientes().map(et=>{
                    return(
                    <option key={et.id} id={et.id}>{et.USUnombre+" "+et.USUApellido}</option>
                    )
                })
            }
            </select>   
                            <button className="btn btn-info" onClick={openModal}>Nuevo</button>
                        </div>
                    </div>
                    <div className="form-group">
                    <label><strong>Metodologia</strong></label>
            <select class="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setMetodologiaID(option)
            }}>
            <option selected>Seleccione uno</option>
            {
                metodologias.map(et=>{
                    return(
                    <option key={et.id} id={et.id}>{et.METnombre}</option>
                    )
                })
            }
            </select>   
                    </div>
                    <div className="form-group">
                    <label><strong>Estado :</strong></label>                        
                            <select className="form-control"
                            onChange={e=>{
                                let index = e.target.selectedIndex;
                                let el = e.target.childNodes[index]
                                let option =  el.getAttribute('id');  
                                console.log('Name, Code', e.target.value, option); 
                                setestadoID(option)
                             }}
                            >
                                <option selected>Seleccione uno</option>
                                <option id="F">Finalizado</option>
                                <option id="C">En Curso</option>
                                <option id="E">En Espera</option>
                                <option id="CA">Cancelado</option>
                            </select>
                    </div>
                </div>
                <div style={{width:'30%',display:'flex',flexDirection:'column'}}>
                    <div className="form-group">
                    <label><strong>Jefe de Proyecto :</strong></label>
            <select class="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setUsu(option)
            }}>
            <option selected>Seleccione uno</option>
            {
                listMiembros().map(et=>{
                    return(
                    <option key={et.id} id={et.id}>{et.USUnombre}</option>
                    )
                })
            }
            </select> 
                    </div>
                    <div style={{display:'flex'}}>
                        <div>
                            <label>Fecha Inicio:</label>
                    <input type="date" id="start" name="trip-start" value={fechaInicio == '' ? getFecha() : fechaInicio} min="2020-01-01" max="2021-12-31" onChange={e=>{
           console.log(e.target.value)
           setFechaInicio(e.target.value)
                    }}/></div>
                    <div>
                        <label>Fecha Fin:</label>
                   <input type="date" id="start" name="trip-start"
       value={fechaFin == '' ? getFecha() : fechaFin}
       min="2020-01-01" max="2021-12-31" onChange={e=>{
        console.log(e.target.value)
        setFechaFin(e.target.value)
    }}/></div>
                    </div>
                </div>
                
            </div>
            <div style={{textAlign:'center'}}>
            <button type="submit" className="btn btn-success" style={{fontSize:'1.2rem',padding:'2%'}}>Guardar</button>
            </div>
            </form>
            <div style={{backgroundColor:'white',padding:'2%'}}>
            <PTabla rows={proyectos} onDelete={onDelete} listMiembros={listMiembros} user={user}/>
            </div>
        </div>
    )
}

export default Proyectos
