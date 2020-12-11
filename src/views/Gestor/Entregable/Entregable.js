import React from 'react'
import ESearch from './ESearch'
import ETabla from './ETabla'

const Entregable = () => {
    return (
        <div>
            <form style={{display:"flex",flexDirection:"column",marginBottom:"1rem",width:"100%"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{width:"40%"}}>
                        <label>Metodologia</label>                        
                        <select className="form-control">
                        <option>RUP</option>
                        </select>                        
                    </div>
                    <div style={{width:"60%"}}>
                        <label>Nombre de Entregable</label>
                        <div className="form-group" >
                        <input className="form-control" placeholder="Nombre del entregable"/>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom:"2rem",display:"flex",justifyContent:"space-between"}}>
                        <div>
                            <label>Etapa</label>
                            <select className="form-control">
                            <option>Inicio</option>
                            </select>
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <button type="submit" className="btn btn-success" style={{height:"80%"}}>Guardar</button>
                        </div>
                </div>
                
            </form>
            <ESearch/>
            <br></br>
            <ETabla/>
        </div>
    )
}

export default Entregable
