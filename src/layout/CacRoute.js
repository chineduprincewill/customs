import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const CacRoute = ({ component: Component, ...rest }) => {

    //const { authTokens } = useAuth();
    const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <Route 
        {...rest}
        render = {props =>
            user && user !== 'undefined' && user.profiletype !== 'CAC' ?
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
        }
    />
  );
}

export default CacRoute;
