import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import { Dashboard, ForgotPassword, Login, Register } from './ContainerComponents';
import ProtectedRoute from './PresentationComponents/Security/ProtectedRoute';
import PublicOnlyRoute from './PresentationComponents/Security/PublicOnly';

const Router = () => {
  return useRoutes([
    {
      path: '/auth/login',
      element: (
        <PublicOnlyRoute>
          <Login />
        </PublicOnlyRoute>
      )
    },
    {
      path: '/auth/register',
      element: (
        <PublicOnlyRoute>
          <Register />
        </PublicOnlyRoute>
      )
    },
    {
      path: '/auth/forgot-password',
      element: (
        <PublicOnlyRoute>
          <ForgotPassword />
        </PublicOnlyRoute>
      )
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      // children: [
      //   {
      //     path: '/',
      //     element: <div>Home</div>
      //   },
      //   {
      //     path: 'draw',
      //     element: <div>Draw</div>
      //   }
      // ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ]);
};

export default Router;
