import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function ETable({usuarioProyecto}) { 
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'USUCodigo', headerName: 'Codigo', width: 130 },
    { field: 'USUnombre', headerName: 'Nombre', width: 130 },
    { field: 'USUApellido', headerName: 'Apellido', width: 130 },
    { field: 'USUemail', headerName: 'Email', width: 130 },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={usuarioProyecto} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}