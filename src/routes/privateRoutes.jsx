
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export const PrivateRoute = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}