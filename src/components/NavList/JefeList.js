import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import { Link } from 'react-router-dom'
import { CalendarToday, Dashboard, Label, ListAlt, Rowing, TrackChanges } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      color:'white',      
    },
    list:{
        color:'white',             
        textDecoration:'none',        
        '&:hover': {
            textDecoration:'none',
            color:'white',            
         },
    }
  }));
const JefeList = () => {
    const classes = useStyles();
    return (
            <List component="nav" style={{paddingTop:"0px"}}
            className={classes.root}>
                <Link to="/jefe/proyecto" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="32px" height="32px"><rect fill="none"/><g><path d="M19.83,7.5l-2.27-2.27c0.07-0.42,0.18-0.81,0.32-1.15C17.96,3.9,18,3.71,18,3.5C18,2.67,17.33,2,16.5,2 c-1.64,0-3.09,0.79-4,2l-5,0C4.46,4,2,6.46,2,9.5S4.5,21,4.5,21l5.5,0v-2h2v2l5.5,0l1.68-5.59L22,14.47V7.5H19.83z M13,9H8V7h5V9z M16,11c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C17,10.55,16.55,11,16,11z"/></g></svg>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%' }}>Proyectos</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/jefe/entregables" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <CalendarToday/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%',margin:0}}>Entregable</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/jefe/tareas" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <ListAlt/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%',margin:0}}>Tareas</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/jefe/cambios" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <TrackChanges/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%',margin:0}}>Control de Cambios</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                {/* <Link to="/gestor/metodologia" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <Dashboard/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%' }}>Metodologia</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/gestor/etapa" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <Label/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%' }}>Etapa</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/gestor/entregable" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <CalendarToday/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%',margin:0}}>Entregable</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/gestor/usuarios" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <Rowing/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%' }}>Usuarios</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link>
                <Link to="/gestor/cambios" className={classes.list}>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <TrackChanges/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography  type="body2" style={{ color: '#FFFFFF',fontWeight:'bold',fontSize:'1rem',padding:'2%' }}>Control de Cambios</Typography>} style={{fontWeight:'bold'}}/>
                </ListItem>            
                </Link> */}
                <Divider />
            </List>
    )
}

export default JefeList
