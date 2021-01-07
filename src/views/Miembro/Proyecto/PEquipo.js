import React, { useEffect, useState } from 'react'
import AxiosCreate from '../../../Axios/AxiosCreate'
import ETable from '../Equipo/ETable'
import PContainer from './PContainer'
// showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
const PEquipo = (props) => {
    const [usuarioProyecto, setUsuarioProyecto] = useState([])
    const listProyectosMiembros = () =>{
        console.log(props)
        AxiosCreate.get(`usuariosProyectos/proyecto/${props.id}`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            setUsuarioProyecto(response.data.usu)
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        listProyectosMiembros()
    }, [])
    return (
        <div>
            <PContainer {...props} >
    <h1>PEquipo {props.id}</h1>
            <ETable usuarioProyecto={usuarioProyecto}/>
            </PContainer>
            
        </div>
    )
}

export default PEquipo
