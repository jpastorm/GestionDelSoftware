import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function PBreadCumb(props) {
  console.log(props)
  const classes = useStyles();
  const equipoBread = () =>{
    props.setIdProyecto(props.id)
    props.setShowTable(false)
    props.setDetalle(false)
    props.setEntregable(false)
    props.setTarea(false)
    props.setEquipo(true)
  }
  const tareaBread = () =>{
    props.setIdProyecto(props.id)
    props.setDetalle(false)
    props.setShowTable(false)
    props.setEquipo(false)
    props.setEntregable(false)
    props.setTarea(true)
  }
  const entregableBread = () => {
    props.setIdProyecto(props.id)
    props.setDetalle(false)
    props.setShowTable(false)    
    props.setEquipo(false)
    props.setTarea(false)
    props.setEntregable(true)
  }
  const detalleBread = () => {
    props.setIdProyecto(props.id)
    props.setShowTable(false)    
    props.setEquipo(false)
    props.setTarea(false)
    props.setEntregable(false)
    props.setDetalle(true)
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit"  onClick={()=>detalleBread()} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Detalles
      </Link>
      <Link
        color="inherit"
        onClick={()=>equipoBread()}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Equipos
      </Link>
      <Link
        color="inherit"
        onClick={()=>tareaBread()}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Tareas
      </Link>
      <Link
        color="inherit"
        onClick={()=>entregableBread()}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Entregables
      </Link>
    </Breadcrumbs>
  );
}
