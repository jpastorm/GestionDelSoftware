import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import swal from '@sweetalert/with-react'
import URol from './URol';
export default function UButtonMenu({id,user,listUsuarios}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);    
  };
  const openModal = () =>{
    swal(<URol id={id} user={user} listUsuarios={listUsuarios}/>)
  }
  const handleClose = () => {
    setAnchorEl(null);
    openModal()
  };

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
        <MenuItem onClick={handleClose}>Seleccionar Rol</MenuItem>        
      </Menu>
    </div>
  );
}
