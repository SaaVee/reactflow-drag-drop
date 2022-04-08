import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AppContext} from '../../Providers';

const PublicOnlyRoute = ({children}) => {
  const {auth} = useContext(AppContext);
  return (
    <div>
      {
        auth.token ?
          <Navigate to="/" replace /> :
          children
      }
    </div>
  )
}

export default PublicOnlyRoute;
