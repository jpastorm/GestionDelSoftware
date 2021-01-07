import React, { useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PEquipo from './PEquipo';
export default function PButtonMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const equipoBread = () =>{
    props.props.setIdProyecto(props.id)
    props.props.setShowTable(false)
    props.props.setEquipo(true)
    props.props.setEntregable(false)
  }
  const tareaBread = () =>{
    props.props.setIdProyecto(props.id)
    props.props.setDetalle(false)
    props.props.setShowTable(false)
    props.props.setEquipo(false)
    props.props.setEntregable(false)
    props.props.setTarea(true)
  }
  const entregableBread = () => {
    props.props.setIdProyecto(props.id)
    props.props.setDetalle(false)
    props.props.setShowTable(false)    
    props.props.setEquipo(false)
    props.props.setTarea(false)
    props.props.setEntregable(true)
  }
  const detalleBread = () => {
    props.props.setIdProyecto(props.id)
    props.props.setShowTable(false)    
    props.props.setEquipo(false)
    props.props.setTarea(false)
    props.props.setEntregable(false)
    props.props.setDetalle(true)
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
        <MenuItem onClick={()=>detalleBread()}>Detalles</MenuItem>        
        <MenuItem onClick={()=>equipoBread()}>Equipo</MenuItem>        
        {/* <MenuItem onClick={()=>entregableBread()}>Entregables</MenuItem>         */}
        <MenuItem onClick={()=>tareaBread()}>Tareas</MenuItem>         
      </Menu>
    </div>
  );
}
