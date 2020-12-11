import React from 'react'
import ESearch from './ESearch'
import ETabla from './ETabla'

const Etapa = () => {
    return (
        <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"column",width:"70%",marginBottom:"2rem"}}>
            <label>Metodologia</label>
            <select class="form-control">
            <option>Default select</option>
            </select>
            <label>Nombre de Etapa</label>
            <select class="form-control">
            <option>Default select</option>
            </select>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
            <button className="btn btn-success" style={{height:"50%"}}>Guardar</button>
            </div>
            </div>
            <ESearch/>
            <br></br>
            <ETabla/>
        </div>
        )
    }
    
    export default Etapa
    