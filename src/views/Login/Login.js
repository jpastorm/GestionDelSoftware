import React, { useState,useContext } from 'react'
import { Box, Button, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Login = ({history}) => {
  const { dispatch } = useContext(AuthContext);
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const login = ()=> {
      const lastPath = localStorage.getItem("lastPath") || "/";
      //history.push('/')
      //history.replace('/')
      const data = {
        username:"jpastorm",
        rol: "gestor",
        logged: "true",
      };
      dispatch({
        type: types.login,
        payload: data,
      });
      history.replace(lastPath);
    }
      return (
        <div>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        
        <Grid item xs={3}>            
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <img src="login.png" width="80%" height="60%"/>
            <TextField id="standard-basic" label="Email" style={{marginBottom:"10px"}}/>
            <TextField id="standard-basic" label="Password" style={{marginBottom:"20px"}} type="password"/>
            <Button variant="contained" color="primary" disableElevation onClick={login}>Iniciar Sesión</Button>
            </div>
            
        </Grid>   
            
            </Grid>  
            </div>
            )
        }
        
        