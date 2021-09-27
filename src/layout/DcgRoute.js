import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DcgRoute = ({ component: Component, ...rest }) => {

    //const { authTokens } = useAuth();
    const user = localStorage.getItem('userData');

  return (
    <Route 
        {...rest}
        render = {props =>
            user && user !== 'undefined' && user.profiletype !== 'DCG' ?
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
        }
    />
  );
}

export default DcgRoute;
