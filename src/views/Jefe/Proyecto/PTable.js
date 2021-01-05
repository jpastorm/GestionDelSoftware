import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import PButtonMenu from './PButtonMenu';


export default function PTable(props) {
  const columns = [
    { field: '', headerName: '', width: 50,renderCell: (params) => (
      <PButtonMenu setShowTable={props.setShowTable} props={props} id={params.row.id}/>
    ), },
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'PROestado', headerName: 'Estado', width: 50 },
    { field: 'PROnombre', headerName: 'Nombre', width: 300 },
    {
      field: 'PROfechainicio',
      headerName: 'Fehca Inicio',
      width: 130,
    },
    {
      field: 'PROfechafin',
      headerName: 'Fecha Fin',
      width: 130,
    },
  ];
  
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={props.proyectos} columns={columns} pageSize={5} />
    </div>
  );
}