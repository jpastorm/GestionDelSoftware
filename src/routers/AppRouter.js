import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

import { Login } from "../views/Login/Login";
import { DashboardAdmin } from "./DashboardAdmin";
import { DashboardCliente } from "./DashboardCliente";
import { DashboardComite } from "./DashboardComite";
import { DashboardGestor } from "./DashboardGestor";
import { DashboardJefe } from "./DashboardJefe";
import { DashboardMiembros } from "./DashboardMiembros";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
const AppRouter = () => {

  const { user } = useContext(AuthContext);
  const getRouter = () => {
    switch (user.rol) {
        case "admin":
            return <DashboardAdmin/>
            break;
        case "cliente":
            return <DashboardCliente/>
            break;
        case 2:
            return <DashboardJefe/>
            break;
        case 1:
            return <DashboardGestor/>
            break;
        case 3:
            return <DashboardMiembros/>
            break;
        default:
            return <Login/>
            break;
    }
  }
  useEffect(() => {
    getRouter()
  }, [])
  return (

    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={user.logged}
            rolUser={user.rol}
          />
          
              <PrivateRoute
              path="/"
              component={getRouter}
              isAuthenticated={user.logged}
              rolUser={user.rol}
            />
          
          
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;