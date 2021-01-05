import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import AxiosCreate from '../../../Axios/AxiosCreate'
import TTable from '../Tareas/TTable'
import PContainer from './PContainer'
// showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
//TODO
//http://127.0.0.1:3000/entregableProyectos usar este endpoint para el combobox filtrando por idProyecto
//El otro combobox se usan los miembros por proyecto
//Por ultimo en la tabla listar tareas por miembros

const PTareas = (props) => {
    const [tareas, setTareas] = useState([])
    const listTareas = () => {
        AxiosCreate.get(`tareas`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            setTareas(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit= () =>{
        const data = {
            "TARnombre":nombreTarea,
            "TARfechainicio":fechaInicio,
            "TARfechafin":fechaFin,
            "TARdescripcion":descripcion,
            "TARestado":estado,
            "TARprogreso":parseInt(progreso),
            "TARarchivoequipo":archivo,
            "pre":parseInt(pre),
            "pru":parseInt(pru)
        }
        console.log(data)

        AxiosCreate.post(`tareas`,data,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            swal("Registrado con exito!", "Se registro la tarea!", "success");

        }).catch(e=>{
            console.log(e)
        })
    }
    const [nombreTarea, setNombreTarea] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [progreso, setProgreso] = useState('')
    const [archivo, setArchivo] = useState('')
    const [estado, setEstado] = useState('')    
    const [pre, setPre] = useState('')
    const [pru, setPru] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
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
    
    const [usuarioProyecto, setUsuarioProyecto] = useState([])
    const listProyectosMiembros = () =>{
        console.log(props)
        AxiosCreate.get(`usuariosProyectos/proyecto/${props.id}`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            const usus = response.data.usu.filter(usu=>usu.USUtipo != 5)
            setUsuarioProyecto(usus)
        }).catch(e=>{
            console.log(e)
        })
    }
    const [entregableProyecto, setEntregableProyecto] = useState([])

const listEntregableProyecto = () =>{
        console.log(props)
        AxiosCreate.get(`entregableProyectos`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            const dataFilter = response.data.filter(rd => rd.pro.id == props.id)
            setPru(dataFilter[0].pru.id)
            setEntregableProyecto(dataFilter)            
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listEntregableProyecto()
        listProyectosMiembros()
        listTareas()
    }, [])
    console.log(props)
    return (
        <div>
            <PContainer {...props} >
                <h1>Configurar tareas {props.id}</h1>
                <div style={{display:"flex",justifyContent:"space-evenly",marginTop:10,backgroundColor:"white"}}>
                    <div>
                        <div className="form-group">
                            <label>Nombre Tarea</label>
                            <input type="text" className="form-control" value={nombreTarea} onChange={e=>{
                                setNombreTarea(e.target.value)
                            }}/>
                        </div>
                        <div className="form-group">
                            <label>Descripcion</label>                            
                        <textarea rows="3" className="form-control" onChange={e=>{
                            setDescripcion(e.target.value)
                        }}>{descripcion}</textarea>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Entregable</label>
                            <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setPre(option)
            }}>
                                {
                                    entregableProyecto.map(ep=>{
                                        return(
                                            <option id={ep.id} key={ep.id}>{ep.etg.ETGnombre}</option>
                                        )
                                    })
                                }
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Entregable</label>
                            <div style={{display:"flex"}}>
                            <input type="date" id="start" name="trip-start"
       value={fechaInicio == '' ? getFecha() : fechaInicio}
       min="2020-01-01" max="2021-12-31" onChange={e=>{
           setFechaInicio(e.target.value)
        console.log(e.target.value)

    }}/>    <input type="date" id="start" name="trip-start"
    value={fechaFin == '' ? getFecha() : fechaFin}
    min="2020-01-01" max="2021-12-31" onChange={e=>{
        setFechaFin(e.target.value)
     console.log(e.target.value)

 }}/>                                 
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Asignado</label>
                            <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setPru(option)
            }}>
                            <option selected>Seleccione uno</option>
                            {
                                    usuarioProyecto.map(up=>{
                                        return(
                                        <option id={up.id} key={up.id}>{up.USUnombre} {up.USUApellido}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Estado</label>
                            <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setEstado(option)
            }}>
                                <option id="F">Finalizado</option>
                                <option id="C">En Curso</option>
                                <option id="E">En Espera</option>
                                <option id="CA">Cancelado</option>
                                <option id="R">Revision</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Valor porcentual</label>
                            <input type="Number" className="form-control" value={progreso} onChange={e=>{
                                setProgreso(e.target.value)
                            }}/>
                        </div>
                        <div className="form-group">
                            <label>Enlace</label>                            
                        <textarea rows="3" className="form-control" onChange={e=>{
                            setArchivo(e.target.value)
                        }}>{archivo}</textarea>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:5,backgroundColor:"white"}}>
                    <button className="btn btn-info" style={{fontSize:"2rem"}} onClick={onSubmit}>Guardar</button>
                </div>
                <div style={{marginTop:10,backgroundColor:"white"}}>
                <TTable tareas={tareas}/>
                </div>
            </PContainer>
            
        </div>
    )
}

export default PTareas
