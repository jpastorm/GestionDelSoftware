import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import swaldos from '@sweetalert/with-react'
import PEditar from './PEditar'
import PButtoMenu from './PButtonMenu';

const PTabla = (props) => {
  const MEditarModal = (id) => {
    swaldos(<PEditar id={id}/>)
  }
  const MEliminar = (id) => {
    swal({
      title: `Estas seguro de elminar el proyecto con el id de registro : ${id}`,
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
      <PButtoMenu listMiembros={props.listMiembros} idProyecto={params.row.id} user={props.user} idJefe={params.row.jefe.id} idMet={params.row.met.id}/>
    ), },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'PROnombre', headerName: 'Nombre', width: 200},
    { field: 'PROdescripcion', headerName: 'Descripcion', width: 200},
    { field: 'PROestado', headerName: 'Estado', width: 100},
    { field: 'PROfechainicio', headerName: 'Inicio', width: 150},
    { field: 'PROfechafin', headerName: 'Fin', width: 150},
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

export default PTabla