import React from 'react'
import ContainerScreen from '../components/ContainerScreen'
import GestorList from '../components/NavList/GestorList'
import GestionProyectos from '../views/Gestor/GestionProyectos'
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import Metodologia from '../views/Gestor/Metodologia/Metodologia';
import Etapa from '../views/Gestor/Etapa/Etapa';
import Entregable from '../views/Gestor/Entregable/Entregable';
import Usuarios from '../views/Gestor/Usuarios/Usuarios';
import ControlCambios from '../views/Gestor/ComiteCambios/ControlCambios';
export const DashboardGestor = () => {
    return (
        <ContainerScreen component={<GestorList/>}>            
            <Router>
                <Switch>
                    <Route exact path="/gestor/proyecto">
                        <GestionProyectos />
                    </Route>
                    <Route exact path="/gestor/metodologia">
                        <Metodologia />
                    </Route>
                    <Route exact path="/gestor/etapa">
                        <Etapa />
                    </Route>
                    <Route exact path="/gestor/entregable">
                        <Entregable />
                    </Route>
                    <Route exact path="/gestor/usuarios">
                        <Usuarios />
                    </Route>
                    <Route exact path="/gestor/cambios">
                        <ControlCambios />
                    </Route>
                    {/* <Route exact path="/hero/:heroeId" component={<GestionMetodologia />} />
                    <Route exact path="/search" component={<GestionMetodologia />} />
                    <Route exact path="/dc">
                        <DcScreen />
                    </Route> */}
                    <Redirect to="/404" />
                </Switch>          
                </Router>     
        </ContainerScreen>
    )
}
