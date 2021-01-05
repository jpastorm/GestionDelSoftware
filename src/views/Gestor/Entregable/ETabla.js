import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import swaldos from '@sweetalert/with-react'
import EEditar from './EEditar'



const ETabla = (props) => {
  const MEditarModal = (id) => {
    swaldos(<EEditar id={id}/>)
  }
  const MEliminar = (id) => {
    swal({
      title: `Estas seguro de Borrar el registro con el id : ${id} ?`,
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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ETGnombre', headerName: 'Nombre', width: 300 },
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
      <DataGrid rows={props.rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default ETabla