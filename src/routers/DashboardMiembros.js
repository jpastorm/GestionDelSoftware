import React from 'react'
import ContainerScreen from '../components/ContainerScreen'
import AdminList from '../components/NavList/AdminList'
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import GestionMetodologia from '../views/Admin/GestionMetodologia';
import GestionProyectos from '../views/Admin/GestionProyectos';
import GestionUsuarios from '../views/Admin/GestionUsuarios';

export const DashboardMiembros = () => {    
    return (
        <ContainerScreen component={<AdminList/>}>            
            <Router>
                <Switch>
                    <Route exact path="/admin/metodologia">
                        <GestionMetodologia />
                    </Route>
                    {/* <Route exact path="/hero/:heroeId" component={<GestionMetodologia />} />
                    <Route exact path="/search" component={<GestionMetodologia />} />
                    <Route exact path="/dc">
                        <DcScreen />
                    </Route> */}
                    <Route exact path="/admin/proyectos">
                        <GestionProyectos />
                    </Route>
                    <Route exact path="/admin/usuarios">
                        <GestionUsuarios />
                    </Route>
                    <Redirect to="/404" />
                </Switch>          
                </Router>     
        </ContainerScreen>
    )
}

