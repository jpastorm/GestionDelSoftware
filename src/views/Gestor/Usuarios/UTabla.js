import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import swaldos from '@sweetalert/with-react'
import UEditar from './UEditar'
import UButtonMenu from './UButtonMenu';

const UTabla = (props) => {
  const MEditarModal = (id) => {
    swaldos(<UEditar id={id}/>)
  }
  const MEliminar = (id) => {
    swal({
      title: `Esta seguro que desea borrar el registro con el id : ${id} ?`,
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        props.onDelete(id)
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
  const columns = [
    { field: '', headerName: '', width: 50,renderCell: (params) => (
      <UButtonMenu id={params.row.id} user={props.user} listUsuarios={props.listUsuarios}/>
    ), },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'USUCodigo', headerName: 'Codigo', width: 100 },
    { field: 'rol', headerName: 'rol', width: 100 , renderCell: (params) => (
      <strong>
        { 
        params.row.rol.ROLdescripcion}       
      </strong>
    ), },
    { field: 'USUnombre', headerName: 'Nombre', width: 200 },
    { field: 'USUApellido', headerName: 'Apellidos', width: 200 },
    { field: 'USUemail', headerName: 'Email', width: 200 },  
    {    
      field:'actions',
      headerName: 'Actions',
      width: '100%',
      renderCell: (params) => (
        <strong>
          {/* {params.value.getFullYear()} */}
          <button
            className="btn btn-info"
            style={{ marginLeft: 16 }}
            onClick={()=>MEditarModal(params.row.id)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            style={{ marginLeft: 16 }}
            onClick={()=>MEliminar(params.row.id)}
          >
            Eliminar
          </button>
        </strong>
      ),
    },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={props.rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default UTabla