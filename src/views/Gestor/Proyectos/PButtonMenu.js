import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import swal from '@sweetalert/with-react'
import Equipo from './Menu/Equipo';
import Entregable from './Menu/Entregable';
export default function PButtoMenu({listMiembros,user,idProyecto,idJefe,idMet}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const equipoModal = () =>{
    swal(<Equipo listMiembros={listMiembros} user={user} idProyecto={idProyecto}/>)
  }
  const entregableModal = () => {
    swal(<Entregable user={user} idJefe={idJefe} idMet={idMet} idProyecto={idProyecto}/>)
  }
  return (
    <div>
      
        <ArrowDropDownIcon onClick={handleClick}/>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>equipoModal()}>Equipo</MenuItem>        
        <MenuItem onClick={()=>entregableModal()}>Entregable</MenuItem>        
        <MenuItem onClick={handleClose}>Sol. Cambio</MenuItem>        
      </Menu>
    </div>
  );
}
