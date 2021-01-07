import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import swal from '@sweetalert/with-react'
import EditTarea from './EditTarea';


export default function TTable({tareas,user,listTareas}) {

  const nombrarStado = (estado) => {
    switch (estado) {
      case "C":
        return "En Curso"
        break;
      case "E":
        return "En espera"
        break;
      case "CA":
        return "Cancelado"
        break;
      case "R":
        return "Revision"
        break;
      case "F":
        return "Finalizado"
      default:
        break;
    }
  }                         
  const ColorState = (estado) => {
    switch (estado) {
      case "C":
        return "cyan"
        break;
      case "E":
        return "yellow"
        break;
      case "CA":
        return "red"
        break;
      case "R":
        return "green"
        break;
      case "F":
        return "blue"
      default:
        break;
    }
  }
  const openModal = (datos) =>{
    swal(<EditTarea datos={datos} user={user} listTareas={listTareas}/>)
  }
  const columns = [
    {     
      field:'Detallar',
      headerName: 'Detallar',
      width: 130,
      renderCell: (params) => (        
          <button
            className="btn btn-info"
            style={{ marginLeft: 16 }}
            onClick={()=>openModal(params.row)}
          >
            Detallar
          </button>          
      ),
    },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'TARnombre', headerName: 'Nombre', width: 250 },
    { field: 'TARfechainicio', headerName: 'Fecha Inicio', width: 130 },
    { field: 'TARfechafin', headerName: 'Fecha Fin', width: 130 },
    { field: 'TARdescripcion', headerName: 'Descripcion', width: 300 },
    { field: 'TARestado', headerName: 'Estado', width: 130,
    renderCell: (params) => (        
      <strong style={{color:ColorState(params.row.TARestado)}}> {nombrarStado(params.row.TARestado)} </strong>      
  ), },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tareas} columns={columns} pageSize={5} />
    </div>
  );
}