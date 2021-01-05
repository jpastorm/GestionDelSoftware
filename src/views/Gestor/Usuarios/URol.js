import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert';
import { AuthContext } from '../../../auth/authContext';
function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
      alignItems:'center'
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
const URol = ({id,user,listUsuarios}) => {
    const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);  
  const [rol, setRol] = useState([])
  const [nombreRol, setNombreRol] = useState('')
  const listRoles = () =>{
    Axios.get('http://127.0.0.1:3000/roles',{
        headers: {
            auth: user.token
          }
    }).then(response=>{
        console.log(response.data)
        setRol(response.data)
    }).catch(e=>{
        console.log(e)
    })
}
    const updateRol = (id,rolid) => {
      console.log(id,rolid)
      const data={
        "rol":rolid
    }
      Axios.put(`http://127.0.0.1:3000/users/rol/${id}`,data,{
          headers: {
              auth: user.token
            }
      }).then(async(response)=>{
        swal("Rol cambiado", "Cambiado!", "success");
          console.log(response.data)
          await listUsuarios()
      }).catch(e=>{
          console.log(e)
      })
    }
    const addRol = (e) => {
        e.preventDefault()
        //swal("Nuevo Rol Creado!", "Guardado!", "success");
        const data= {
            "ROLdescripcion":nombreRol,
            "ROLestado":true
        }
        Axios.post('http://127.0.0.1:3000/roles',data,{
            headers: {
                auth: user.token
              }
        }).then(async(response)=>{
            console.log(response.data)
            await listRoles()
            setNombreRol('')
        }).catch(e=>{
            console.log(e)
        })
    }
  useEffect(() => {
      listRoles()
  }, [])
    return (
        <div style={{justifyContent:'center',textAlign:"center"}}>
          <form onSubmit={addRol} style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <div className="form-group">
                <input  className="form-control" placeholder="Nombre del rol" type="text" value={nombreRol} onChange={e=>{
                    setNombreRol(e.target.value)
                }}/>
              </div>
              <div className="form-group">
              <button className="btn btn-success">Guardar</button>
              </div>
              
        </form>
        <Typography variant="h6" className={classes.title}>
            {`Seleccione un rol ${id}`}
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {rol.map(r=>{
                  return(
                    <ListItem button 
                    onClick={() => updateRol(id,r.id)}
                    >
                    <ListItemText
                      primary={r.ROLdescripcion}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                  )
              })}
            </List>
          </div>  
        </div>
    )
}

export default URol
