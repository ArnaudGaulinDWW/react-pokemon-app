import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
  
const PrivateRoutes = ({ component: Component, ...rest }: any) => {
 
    const isAuthenticated = AuthenticationService.isAuthenticated;
      
      return  isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  }
  
export default PrivateRoutes;