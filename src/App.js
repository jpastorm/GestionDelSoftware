import React, { useEffect, useReducer } from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from './configTheme/temaConfig';
import { authReducer } from './auth/authReducer'
import AppRouter from './routers/AppRouter'
import { AuthContext } from './auth/authContext';

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <ThemeProvider theme={theme}>
       <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter/>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
