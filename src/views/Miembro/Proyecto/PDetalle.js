import React, { useEffect, useState } from 'react'
import AxiosCreate from '../../../Axios/AxiosCreate'
import PContainer from './PContainer'
// showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
const PDetalle = (props) => {
    const [nombreProyecto, setNombreProyecto] = useState('')
    const [estado, setEstado] = useState('')
    const [jefe, setJefe] = useState('')
    const [metodologia, setMetodologia] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    useEffect(() => {
        AxiosCreate.get(`proyectos/${props.id}`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            setNombreProyecto(response.data.PROnombre)
            setEstado(response.data.PROestado)
            setJefe(response.data.jefe.usuario.USUnombre)
            setMetodologia(response.data.met.METnombre)
            setFechaInicio(response.data.PROfechainicio)
            setFechaFin(response.data.PROfechafin)
        }).catch(e=>{
            console.log(e)
        })
    }, [])
    console.log(props)
    return (
        <div >
            <PContainer {...props} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5%",flexDirection:"column"}}>
                    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:"40%"}}>
                        <h2>{nombreProyecto}</h2>
                        <h2>{estado}</h2>
                    </div>
                    <div style={{display:'flex',justifyContent:"space-between",width:"40%",marginTop:"10%"}}>
                        <div>
                            <p>Datos Proyecto</p>
    <p>Nombre : {nombreProyecto}</p>
    <p>Jefe Proyecto : {jefe}</p>
    <p>Metodologia : {metodologia}</p>
    <p>Estado : {estado}</p>                            
                        </div>
                        <div>
                            <p>Fecha</p>
    <p>Fecha Inicio : {fechaInicio}</p>
    <p>Fecha Fin : {fechaFin}</p>
                        </div>
                    </div>
                </div>
            </PContainer>
            
        </div>
    )
}

export default PDetalle
