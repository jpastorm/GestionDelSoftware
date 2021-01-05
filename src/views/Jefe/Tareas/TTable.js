import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function TTable({tareas}) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'TARnombre', headerName: 'Nombre', width: 300 },
    { field: 'TARfechainicio', headerName: 'Fecha Inicio', width: 130 },
    { field: 'TARfechafin', headerName: 'Fecha Fin', width: 130 },
    { field: 'TARdescripcion', headerName: 'Descripcion', width: 300 },
    { field: 'TARestado', headerName: 'Estado', width: 130 },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tareas} columns={columns} pageSize={5} />
    </div>
  );
}