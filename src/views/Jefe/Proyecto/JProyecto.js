import { Card, CardContent } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../auth/authContext'
import AxiosCreate from '../../../Axios/AxiosCreate'
import PContainer from './PContainer'
import PDetalle from './PDetalle'
import PEntregables from './PEntregables'
import PEquipo from './PEquipo'
import PTable from './PTable'
import PTareas from './PTareas'

const JProyecto = () => {
    const { user } = useContext(AuthContext);
    const [showTable, setShowTable] = useState(true)
    const [detalle, setDetalle] = useState(false)
    const [equipo, setEquipo] = useState(false)
    const [entregable, setEntregable] = useState(false)
    const [tarea, setTarea] = useState(false)
    const [idProyecto, setIdProyecto] = useState('')
    const [proyectos, setProyectos] = useState([])
    const showTableFn = () =>{
        setDetalle(false)
        setEquipo(false)
        setEntregable(false)
        setTarea(false)
        setShowTable(true)
    }
    const listProyectos = () =>{
        AxiosCreate.get('usuariosProyectos/miembro',{
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
    useEffect(() => {
        if(showTable){
            listProyectos()
        }
        if(detalle === true || equipo === true || entregable === true || tarea === true){
            setShowTable(false)
        }        
    }, [showTable,detalle,equipo,entregable,tarea])
    return (
        <div>
                {
                showTable &&
                <>
                        <h1 style={{marginBottom:100}}>Proyecto</h1>
                        <div style={{backgroundColor:'white',padding:'2%'}}>
                            <PTable  setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto} proyectos={proyectos}/>
                        </div>
                </>
                }
                {
                    equipo &&
                    <PEquipo showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto} user={user}/>
                }             
                {
                    detalle &&
                    <PDetalle showTableFn={showTableFn}  id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
                }                            
                {
                    entregable &&
                    <PEntregables showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto} user={user}/>
                }            
                {
                    tarea &&
                    <PTareas showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto} user={user} />
                }            
        </div>
        )
    }

    export default JProyecto
