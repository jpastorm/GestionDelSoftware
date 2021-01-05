import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import AxiosCreate from '../../../Axios/AxiosCreate'
import ETable from '../Entregables/ETable'
import PContainer from './PContainer'
// showTableFn={showTableFn} id={idProyecto} setShowTable={setShowTable} setTarea={setTarea} setEntregable={setEntregable} setDetalle={setDetalle} setEquipo={setEquipo} setIdProyecto={setIdProyecto}/>
const PEntregables = (props) => {
    const [proyecto, setProyecto] = useState([])
    const [etapa, setEtapa] = useState('')
    const [entregable, setEntregable] = useState('')
    const [responsable, setResponsable] = useState('')
    const [responsables, setResponsables] = useState([])
    const [enlace, setEnlace] = useState('')
    const [entregables, setEntregables] = useState([])
    const [metnombre, setMetnombre] = useState('')
    ////////////////////////ID
    const [proyectoid, setProyectoid] = useState('')
    const [entregableid, setEntregableid] = useState('')
    const [responsableid, setResponsableid] = useState('')
    const [entregableProyectoId, setEntregableProyectoId] = useState('')
    const [usuarioProyecto, setUsuarioProyecto] = useState([])

    const onEdit = () =>{
        const data = {
            "PREprogreso":0,
            "PREarchivo":enlace,
            "pro":props.id,
            "etg":entregableid,
            "pru":responsableid
        }
        console.log(data)
        AxiosCreate.put(`entregableProyectos/${entregableProyectoId}`,data,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            swal("Editado !", "Se cambio el registro", "success");
        }).catch(e=>{
            console.log(e)
        })
    }
    const findResponsables = (respon) =>{
        const result = usuarioProyecto.filter(usu=>usu.id == respon)
        setResponsable(`${result.USUnombre} ${result.USUApellido}`) 
        setResponsableid(result[0].id) 
        console.log(result)        
    }
    const setup = (en,eta,epid,enid,elc) =>{
        setEntregable(en)
        setEntregableProyectoId(epid)
        setEtapa(eta)
        setEntregableid(enid)
        setEnlace(elc)
    }
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
    const listProyecto = () =>{
        console.log(props)
        AxiosCreate.get(`proyectos/${props.id}`,{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            setProyecto(response.data[0])
            setMetnombre(response.data[0].met.METnombre)
        }).catch(e=>{
            console.log(e)
        })
    }
    const listEntregables = () => {
        AxiosCreate.post(`entregableProyectos/miembro/`,{},{
            headers: {
                auth: props.user.token
              }
        }).then(response=>{
            console.log(response.data)
            setEntregables(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    useEffect(() => {
        setProyectoid(props.id)
        listProyecto()
        listEntregables()
        listProyectosMiembros()
    }, [])    
    return (
        <div>
            <PContainer {...props} >
                <h1>Configurar Entregable {props.id}</h1>
                <div style={{textAlign:"center",backgroundColor:"white",padding:5}}>
                <div className="d-flex justify-content-center" style={{width:"80%"}}>
                    <div style={{padding:30}}>
                        <div className="form-group">
                        <label style={{marginRight:"10%"}}>Metodologia</label>                        
                        </div>
                        <div className="form-group">
                        <label style={{marginRight:"10%"}}>Etapa</label>
                        </div>
                        <div className="form-group">
                        <label style={{marginRight:"10%"}}>Entregable</label>
                        </div>


                    </div>
                    <div style={{padding:30}}>
                        <div className="form-group d-flex">
                            
                            <input className="form-control" placeholder="Metodologia" type="text" value={metnombre} readOnly/>
                        </div>
                        <div className="form-group d-flex">
                        
                            <input className="form-control" placeholder="Etapa" type="text" value={etapa} readOnly/>
                        </div>
                        <div className="form-group d-flex">
                            <input className="form-control" placeholder="Entregable" type="text" value={entregable} readOnly/>
                        </div>                      
                    </div>
                    <div style={{padding:30}}>
                        <div className="form-group">
                        <label style={{marginRight:"10%"}}>Responsable</label>
                        </div>
                   
                        <div className="form-group">
                        <label style={{marginRight:"10%"}}>Enlace</label>
                        </div>


                    </div>
                    <div style={{padding:30}}>
                    <div className="form-group d-flex">
                                                
                            <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setResponsableid(option)
            }}>
                                {
                                    usuarioProyecto.map(usu=>{
                                        return(
                                        <option id={usu.id} key={usu.id}>{usu.USUnombre} {usu.USUApellido}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group d-flex">
                        
    <textarea className="form-control" id="" rows="3" value={enlace} onChange={e=>{
        setEnlace(e.target.value)
    }}></textarea>

                        </div>   
                    </div>
                    
                </div>
                <button className="btn btn-info" style={{fontSize:"2rem"}} onClick={onEdit}>Guardar</button>
                </div>
                <div style={{marginTop:10,padding:15,backgroundColor:"white"}}>
                <ETable entregables={entregables} setEntregable={setEntregable} setEtapa={setEtapa} setProyectoid={setProyectoid} setEntregableid={setEntregableid} setResponsable={setResponsable} findResponsables={findResponsables} setup={setup}/>
                </div>
            </PContainer>
            
        </div>
    )
}

export default PEntregables
