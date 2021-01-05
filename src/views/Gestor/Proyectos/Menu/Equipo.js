import Axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../auth/authContext';

const Equipo = ({listMiembros,idProyecto,user}) => {
    const [clienteID, setClienteID] = useState('')
    
    const onSubmit = () =>{
        const data = {
            "usu":parseInt(clienteID),
            "pro":idProyecto,
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
    }
    return (
        <div style={{display:'flex',justifyContent:"center",flexDirection:'row'}}>
            <div className="form-group">
                <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setClienteID(option)}}
               >
                    {
                      listMiembros().map(lm=>{
                        return(
                        <option key={lm.id} id={lm.id}>{lm.USUnombre} {lm.USUApellido} ({lm.rol.ROLdescripcion})</option>
                        )
                    })
                    }
                </select>
            </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={()=>onSubmit()}>Guardar</button>
                </div>
        </div>        
    )
}

export default Equipo
