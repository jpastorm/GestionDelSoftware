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
        AxiosCreate.post(`tareas/miembro`,{},{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            setTareas(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
 
    useEffect(() => {
        listTareas()
    }, [])
    console.log(props)
    return (
        <div>
            <PContainer {...props} >
                <h1>Configurar tareas {props.id}</h1>
                <div style={{marginTop:10,backgroundColor:"white"}}>
                <TTable tareas={tareas} user={props.user}/>
                </div>
            </PContainer>
            
        </div>
    )
}

export default PTareas
