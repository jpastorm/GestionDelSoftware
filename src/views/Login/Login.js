import React, { useState,useContext, useEffect } from 'react'
import { Box, Button, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import Axios from 'axios';

export const Login = ({history}) => {
  
  const { dispatch } = useContext(AuthContext);
  const [codigo, setCodigo] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      useEffect(() => {
        // setCodigo('32434123')
        // setPassword('3232')
      }, [])
    const login = ()=> {
   
      const lastPath = localStorage.getItem("lastPath") || "/";
      //history.push('/')
      //history.replace('/')
      const data = {
        "USUCodigo":codigo,
        "USUcontrasenia":password
    }
      Axios.post('http://127.0.0.1:3000/auth/login',data).then(response=>{
        
        if(response.data.message == "OK"){
          console.log(response.data)
          const data = {        
            rol: response.data.userTipo,
            token:response.data.token,
            logged: "true",
          };
          dispatch({
            type: types.login,
            payload: data,
          });
          //history.replace(lastPath);
        }
        
      })
      
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
            <TextField id="standard-basic" label="Codigo" style={{marginBottom:"10px"}} value={codigo} onChange={e=>{
              setCodigo(e.target.value)
            }}/>
            <TextField id="standard-basic" label="Password" style={{marginBottom:"20px"}} type="password" value={password} onChange={e=>{
              setPassword(e.target.value)
            }}/>
            <Button variant="contained" color="primary" disableElevation onClick={login}>Iniciar Sesión</Button>
            </div>
            
        </Grid>   
            
            </Grid>  
            </div>
            )
        }
        
        