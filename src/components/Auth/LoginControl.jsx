import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginComponent';
import LogoutButton from './logoutComponent';

const LoginControl = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Fragment>
      <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
        Profile
      </Link>
      <LogoutButton />
    </Fragment>
  ) : (
    <LoginButton />
  );
};

export default LoginControl;
