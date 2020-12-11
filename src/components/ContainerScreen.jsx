import React, { useState } from 'react'
import {
    Hidden,
    makeStyles,

} from '@material-ui/core'
import Navbar from '../ui/Navbar'
import NavLayout from './NavLayout'
const styles = makeStyles(theme=>({
    root:{
        display:"flex"
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor:theme.palette.background.default,
        padding:theme.spacing(3)
    }
}))
const ContainerScreen = (props) => {
    const classes = styles()
    const [open, setOpen] = useState(false)
    const closeNavLayout = () => {
        setOpen(!open)
    }
    return (
        <div className={classes.root}>
            <Navbar open={closeNavLayout}/>
            <Hidden xsDown> 
                <NavLayout variant="permanent" open={true} component={props.component}/>
            </Hidden>
            <Hidden smUp> 
                <NavLayout variant="temporary" open={open} onClose={closeNavLayout} component={props.component}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                {props.children}
            </div>
        </div>
    )
}

export default ContainerScreen
