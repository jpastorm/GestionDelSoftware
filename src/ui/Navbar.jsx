import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { AuthContext } from '../auth/authContext'
import { useHistory } from 'react-router-dom'
import { types } from '../types/types'
const useStyles = makeStyles(theme=>({
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:"none"
        }
    },
    title:{
        flexGrow:1
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
            width:`calc(100% - ${240}px)`,
            marginLeft:240
        }
    }
}))
const Navbar = (props) => {
    const {
        user: { username },
        dispatch,
        logged
      } = useContext(AuthContext);
      const history = useHistory();
    const logout = () => {
                 
          
          console.log(history);
          console.log(username);          
            history.replace("/login");
            dispatch({
              type: types.logout,
            });
            localStorage.removeItem("user");
    }
   
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={()=>props.open()}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Gestion
                    </Typography>
                    {
                        logged ? (<Button variant="text" color="inherit">
                        Login
                    </Button>)
                       :(<Button variant="text" color="inherit" onClick={logout}>Cerrar sesion</Button>)
                    }
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
