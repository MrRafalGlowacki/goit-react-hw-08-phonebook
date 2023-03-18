import { useAuth } from 'components/castomHook/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/goit-react-hw-08-phonebook/' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
