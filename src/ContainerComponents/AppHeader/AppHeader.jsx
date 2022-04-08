import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Providers';
import useApi from "../../Utilities/rest-util";
import './AppHeader.scss';
const AppHeader = () => {
  const { auth, profile, setProfile } = useContext(AppContext);
  const api = useApi();

  useEffect(() => {
    api.get('/users/me').then((resp) => {
      api.get('/users/' + resp.data).then((resp) => {
        setProfile(resp.data);
      });
    })
      .catch((error) => {
        console.log('Error while fetching user detail', error);
      });
  }, [api, setProfile]);

  return (
    <header className='app-header-wrapper'>
      <div className='w-50'>
        <img src={'https://cdn.dribbble.com/users/13938/screenshots/2052072/media/cf12df49fd67f56774e391895eab061c.gif'} alt="" srcset="" />
      </div>
      <div className='w-50 login-register'>
        {
          !auth?.token ?
            <span>
              <Link to="auth/login">Login</Link>
              {' '}/{' '}
              <Link to="auth/register">Register</Link>
            </span>
            :
            ""
        }
      </div>
    </header>
  );
};
export default AppHeader;
