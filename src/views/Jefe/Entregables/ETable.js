import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';




export default function ETable({entregables,findResponsables,setup}) {
  const setAttributes = (entregable,etapa,respon,entregableproyectoid,entregableid,enlace) => {
    
    setup(etapa,entregable,entregableproyectoid,entregableid,enlace)    
    findResponsables(respon)    
  }
  const columns = [
    { field: '', headerName: '', width: 100,renderCell: (params) => (
      
      <button className="btn btn-info" onClick={()=>setAttributes(
        params.row.etapa.metodologia.METnombre,
        params.row.etapa.ETAnombre,        
        params.row.entproyecto.usuario.id,
        params.row.entproyecto.id,
        params.row.id,
        params.row.entproyecto.PREarchivo
        )}>Editar</button>
    ), },
    { field: 'id', headerName: 'ID', width: 70 },    
    { field: 'etapa', headerName: 'Etapa', width: 100 , renderCell: (params) => (
      <strong>
        { 
        params.row.etapa.ETAnombre}       
      </strong>
    ), },
    { field: 'ETGnombre', headerName: 'Entregable', width: 300 },
    { field: 'responsable', headerName: 'Responsable', width: 100 , renderCell: (params) => (
      <strong>
        { 
        params.row.entproyecto.usuario.id}       
      </strong>
    ), },
    { field: 'PREprogreso', headerName: 'Progreso', width: 100 , renderCell: (params) => (
      <strong>
        { 
        params.row.entproyecto.PREprogreso}       
      </strong>
    ), },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={entregables} columns={columns} pageSize={5} />
    </div>
  );
}