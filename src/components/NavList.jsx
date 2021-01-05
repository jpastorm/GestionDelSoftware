import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      color:'white',      
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
const NavList = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav"  className={classes.root}>
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
