import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Build, Face } from '@material-ui/icons'
const AdminList = () => {
    return (
            <List component="nav" style={{paddingTop:"0px"}}>
                <Link to="/admin/metodologia">
                <ListItem button>
                    <ListItemIcon>
                        <Build/>
                    </ListItemIcon>
                    <ListItemText primary="metodologia"/>                    
                </ListItem>            
                </Link>
                {/* <Link to="/admin/proyectos">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Proyectos"/>                    
                </ListItem>            
                </Link> */}
                <Link to="/admin/usuarios">
                <ListItem button>
                    <ListItemIcon>
                        <Face/>
                    </ListItemIcon>
                    <ListItemText primary="Usuarios"/>                    
                </ListItem>            
                </Link>
                <Divider />
            </List>
    )
}

export default AdminList
