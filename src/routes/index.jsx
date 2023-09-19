import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard";
import { LoginTabsProvider } from "../context/Tabs/LoginTabsContext";
// import { AuthProvider, AuthContext } from "../context/Auth/AuthContext";
// import { PrivateRoute } from "./privateRoutes";
// import { useContext } from 'react';
import { AuthProvider, AuthContext } from "../context/Auth/AuthContext";
import { useContext } from "react";
import propTypes from "prop-types";
import SidebarLayout from "../layouts/SidebarLayout";
import Agendamentos from "../pages/Agendamentos";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
};

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginTabsProvider>
                <Login />
              </LoginTabsProvider>
            }
          />
          <Route element={<SidebarLayout />}>
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              exact
              path="/agendamentos"
              element={
                <PrivateRoute>
                  <Agendamentos />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          {/* <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
