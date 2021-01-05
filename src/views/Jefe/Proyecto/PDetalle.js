import React from 'react'
import PContainer from './PContainer'
// showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
const PDetalle = (props) => {
    console.log(props)
    return (
        <div >
            <PContainer {...props} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5%",flexDirection:"column"}}>
                    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:"40%"}}>
                        <h2>Nombre Proyecto {props.id}</h2>
                        <h2>En curso</h2>
                    </div>
                    <div style={{display:'flex',justifyContent:"space-between",width:"40%",marginTop:"10%"}}>
                        <div>
                            <p>Datos Proyecto</p>
                            <p>Nombre</p>
                            <p>Jefe Proyecto</p>
                            <p>Metodologia</p>
                            <p>Estado</p>
                            <p>Cliente</p>
                        </div>
                        <div>
                            <p>Fecha</p>
                            <p>Fecha Inicio</p>
                            <p>Fecha Fin</p>
                        </div>
                    </div>
                </div>
            </PContainer>
            
        </div>
    )
}

export default PDetalle
