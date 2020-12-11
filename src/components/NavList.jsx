import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
const NavList = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Elemento"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Elemento"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Elemento"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Elemento"/>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default NavList
