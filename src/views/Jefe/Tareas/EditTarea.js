import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import AxiosCreate from '../../../Axios/AxiosCreate'

const EditTarea = ({datos,user,listTareas}) => {
    
    const [enlace, setEnlace] = useState('')
    const [state, setstate] = useState('')
    const onEdit = () => {
        AxiosCreate.put(`tareas/enlace/${datos.id}`,{
            "TARestado":state,
            "TARarchivoequipo":enlace
        },{
            headers: {
                auth: user.token
              }
        }).then(async response=>{
            swal("Fue entregado con exito!", "Entregado!", "success");
            await listTareas()
        }).catch(e=>{
            console.log(e)
        })   
    }
    return (
        <div>
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control"  readOnly value={datos.TARnombre}/>
            </div>
            <div className="form-group">
            <label>Fecha Inicio</label>
                <input className="form-control" readOnly value={datos.TARfechainicio}/>
            </div>
            <div className="form-group">
            <label>Fecha Fin</label>
                <input className="form-control" readOnly value={datos.TARfechafin}/>
            </div>
            <div className="form-group">
            <label>Descripcion</label>
    <textarea readOnly className="form-control">{datos.TARdescripcion}</textarea>
            </div>
            <div className="form-group">
                            <label>Estado</label>
                            <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setstate(option)
            }}>
                                <option id="F">Finalizado</option>
                                <option id="C">En Curso</option>
                                <option id="E">En Espera</option>
                                <option id="CA">Cancelado</option>
                                <option id="R">Revision</option>
                            </select>
                        </div>
            <div className="form-group">
            <label>Enlace</label>
                <textarea  className="form-control" value={ enlace == '' ? datos.TARarchivoequipo : enlace} onChange={e=>{
                    setEnlace(e.target.value)
                }}></textarea>
            </div>
            <button className="btn btn-success btn-block"  onClick={onEdit}><strong style={{fontSize:"1.2rem"}}>Enviar</strong> </button>
        </div>
    )
}

export default EditTarea
