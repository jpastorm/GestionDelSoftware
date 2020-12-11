import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import { Link } from 'react-router-dom'

const GestorList = () => {
    return (
            <List component="nav" style={{paddingTop:"0px"}}>
                <Link to="/gestor/proyecto">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Proyecto"/>
                </ListItem>            
                </Link>
                <Link to="/gestor/metodologia">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Metodologia"/>                    
                </ListItem>            
                </Link>
                <Link to="/gestor/etapa">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Etapa"/>                    
                </ListItem>            
                </Link>
                <Link to="/gestor/entregable">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Entregable"/>                    
                </ListItem>            
                </Link>
                <Link to="/gestor/usuarios">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Usuarios"/>                    
                </ListItem>            
                </Link>
                <Link to="/gestor/cambios">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Control de Cambios"/>                    
                </ListItem>            
                </Link>
                <Divider />
            </List>
    )
}

export default GestorList
