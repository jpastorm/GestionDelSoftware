import React from 'react'
import MSearch from './MSearch'
import MTabla from './MTabla'

const Metodologia = () => {
    return (
        <div>
            <h1>Datos de metodologia</h1>
            <form >
                <div className="form-group" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                    <label htmlFor="Nombre">Ingrese el nombre de la metodologia</label>
                    <div style={{display:"flex"}}>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre de la metodologia"/>                    
                    <button className="btn btn-success">Guardar</button>
                    </div>
                </div>
                
              
            </form>
            <MSearch/>
            <br></br>
                <MTabla/>
        </div>
    )
}

export default Metodologia
