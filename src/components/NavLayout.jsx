import React from 'react'
import {
    Divider,
    Drawer,
    makeStyles
} from '@material-ui/core'
const styles = makeStyles(theme=>({
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawerPaper:{
        width:240,
        background: "#2A3F54",
        fontWeight:'bold'
    },
    toolbar:theme.mixins.toolbar
}))
const NavLayout = ({component:Component,variant,onClose,open}) => {
    const classes = styles()
    return (
            <Drawer 
                    className={classes.drawer}           
                    classes={{paper:classes.drawerPaper}}
                    anchor="left"
                    variant={variant}
                    open={open}
                    onClose={onClose ? onClose : null}>
                <div className={classes.toolbar}></div>
                <Divider/>                
                   {Component}
            </Drawer>
    )
}

export default NavLayout
