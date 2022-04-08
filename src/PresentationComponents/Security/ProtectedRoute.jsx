import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AppContext} from '../../Providers';

const ProtectedRoute = ({children}) => {
  const {auth} = useContext(AppContext);
  return (
    <div>
      {
        auth.token ?
          children :
          <Navigate to="/auth/login" replace />
      }
    </div>
  )
}

export default ProtectedRoute
