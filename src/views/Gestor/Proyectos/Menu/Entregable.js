import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import swal from 'sweetalert';
import '../styles.css'
const Entregable = ({user,idJefe,idMet:idMett,idProyecto}) => {
    const [met, setMet] = useState([])
    const [etapa, setEtapa] = useState([])
    const [entregable, setEntregable] = useState([])
    const [idMet, setIdMet] = useState('')
    const [idEtapa, setIdEtapa] = useState('')
    const [idEntregable, setIdEntregable] = useState([])
    const onSubmit = () =>{              
        for(const ent of idEntregable){
            const data = {
                "PREprogreso":0,
                "PREarchivo":"https://uptpe-my.sharepoint.com/:w:/g/personal/antroblesf_upt_pe/EbuxFoJ5x1hFqohOEyc_hoYB1R-vItcqU111beuXQDfc8Q?e=DDsMVh",
                "pro":parseInt(idProyecto),
                "etg":parseInt(ent),
                "pru":parseInt(idJefe)
            }
            console.log(data)
            Axios.post(`http://127.0.0.1:3000/entregableProyectos`,data,{
                headers: {
                    auth: user.token
                        }
                    }).then(response=>{
                        console.log(response.data)    
                        swal("Registrado!", "Entregables guardados", "success");
                    }).catch(e=>{
                        console.log(e)
                    })
          }
        }
        
    
    useEffect(() => {       
        console.log("IdJefe",idJefe)
        console.log("IdJefe",idMett)
        Axios.get('http://127.0.0.1:3000/metodologias',{
            headers: {
                auth: user.token
              }
        }).then(response=>{
            console.log(response.data)
            const result = response.data.filter(re=>re.id == idMett)
            setMet(result)


            Axios.get(`http://127.0.0.1:3000/etapas/metodologia/${idMett}`,{
            headers: {
                auth: user.token
                    }
                }).then(response=>{
                    console.log(response.data)
                    setEtapa(response.data)
                    
                }).catch(e=>{
                    console.log(e)
                })



        }).catch(e=>{
            console.log(e)
        })
    }, [])
    const [workDays, setWorkDays] = useState([])
    const handleCheckboxChange = event => {
        console.log(event.target.id)
        let newArray = [...idEntregable, event.target.id];
        if (idEntregable.includes(event.target.id)) {
          newArray = newArray.filter(day => day !== event.target.id);
        }        
        setIdEntregable(newArray)
        console.log(idEntregable)
      };
      const ChangeEtapa = (option) => {
        Axios.get(`http://127.0.0.1:3000/entregables/etapa/${option}`,{
            headers: {
                auth: user.token
                    }
                }).then(response=>{
                    console.log(response.data)
                    setEntregable(response.data)
                    
                }).catch(e=>{
                    console.log(e)
                })
      }
    return (
        <div>
        <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',width:"50%",marginRight:10}}>
                <div className="form-group">
                    <label>Metodologia</label>
                    <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setIdMet(option)
            }}>
                        {
                            met.map(re=>{
                                return(
                                        <option id={re.id} key={re.id}>{re.METnombre}</option>
                                )
                            })
                        }
                        
                    </select>
                </div>
                <div className="form-group">
                    <label>Etapa</label>
                    <select className="form-control" onChange={e=>{
               let index = e.target.selectedIndex;
               let el = e.target.childNodes[index]
               let option =  el.getAttribute('id');  
               console.log('Name, Code', e.target.value, option); 
               setIdEtapa(option)
               ChangeEtapa(option)
            }}>
                    {
                            etapa.map(re=>{
                                return(
                                        <option id={re.id} key={re.id}>{re.ETAnombre}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div style={{marginLeft:20}}>
            <div className="form-group" style={{width:'100%'}}>
                <label>Entregables</label>
            <div style={{display:'flex',flexDirection:'column',marginLeft:30,marginTop:10}}>
                {
                    entregable.map(en=>{
                        return(
                            <div key={en.id}>
                                <input
                                type="checkbox"
                            
                                id={en.id}
                                value={en.id}
                                onChange={handleCheckboxChange}                                
                                style={{padding:20}}
                                />
                                <label htmlFor={en.id}>
                                    {en.ETGnombre}
                                </label>
                        </div>
                        )
                    })
                }
              
                </div>
            </div>
            </div>
            
        </div>
        <button className="btn btn-success btn-block" onClick={onSubmit}>Guardar</button>
        </div>
    )
}

export default Entregable
