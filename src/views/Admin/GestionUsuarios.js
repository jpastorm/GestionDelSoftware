import React from 'react'
import CustomizedInputBase from './search/searchComponent'

import swal from '@sweetalert/with-react'
import AddUser from './Components/addUser'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './styles/gestionUsuarios.css'
import TableMaterial from './table/tableMaterial';

const GestionUsuarios = () => {
    const swalModal = () => {
        swal(<AddUser/>)
    } 
    return (
        <div>
            <h1>Gestion de usuarios</h1>
           
            <div className="wrapperinputs">

                <CustomizedInputBase/>
                <button className="btn btn-success agregar" onClick={swalModal}><AddCircleIcon/>Agregar usuario</button>
            </div>            
            <TableMaterial/>

        </div>
    )
}

export default GestionUsuarios
