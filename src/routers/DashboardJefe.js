import React from 'react'
import ContainerScreen from '../components/ContainerScreen'
import JefeList from '../components/NavList/JefeList'
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import JProyecto from '../views/Jefe/Proyecto/JProyecto';
import Entregables from '../views/Jefe/Entregables/Entregables';
import Tareas from '../views/Jefe/Tareas/Tareas';
import Cambios from '../views/Jefe/Cambios/Cambios';

export const DashboardJefe = () => {    
    return (
        <ContainerScreen component={<JefeList/>}>            
            <Router>
                <Switch>
                    <Route exact path="/jefe/proyecto">
                        <JProyecto />
                    </Route>
                    <Route exact path="/jefe/entregables">
                        <Entregables />
                    </Route>
                    <Route exact path="/jefe/tareas">
                        <Tareas />
                    </Route>
                    <Route exact path="/jefe/cambios">
                        <Cambios />
                    </Route>
                    {/* <Route exact path="/hero/:heroeId" component={<GestionMetodologia />} />
                    <Route exact path="/search" component={<GestionMetodologia />} />
                    <Route exact path="/dc">
                        <DcScreen />
                    </Route> */}
                    {/* <Route exact path="/admin/proyectos">
                        <GestionProyectos />
                    </Route>
                    <Route exact path="/admin/usuarios">
                        <GestionUsuarios />
                    </Route> */}
                    <Redirect to="/404" />
                </Switch>          
                </Router>     
        </ContainerScreen>
    )
}

