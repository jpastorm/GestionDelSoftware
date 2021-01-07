import React from 'react'
import ContainerScreen from '../components/ContainerScreen'
import MiembroList from '../components/NavList/MiembroList'
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import JProyecto from '../views/Miembro/Proyecto/JProyecto';

export const DashboardMiembros = () => {    
    return (
        <ContainerScreen component={<MiembroList/>}>            
            <Router>
                <Switch>
                    <Route exact path="/miembro/proyecto">
                        <JProyecto />
                    </Route>                    
                    <Redirect to="/404" />
                </Switch>          
                </Router>     
        </ContainerScreen>
    )
}

