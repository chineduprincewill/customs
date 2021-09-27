import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Customer from './navlinks/Customer';
import Cac from './navlinks/Cac';
import Dcg from './navlinks/Dcg';
//import { useState } from 'react/cjs/react.development';

const Navbar = (props) => {

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("userData");
        props.history.push("/")
    }

    let authLinks;
    let navLinks;

    const user = JSON.parse(localStorage.getItem("userData"));

    if(user)
    {
        if(user.profiletype === 'CUSTOMER')
        {
            authLinks = <Customer role={user.profiletype} logout={logout} />
        }
        else if(user.profiletype === 'CAC')
        {
            authLinks = <Cac role={user.profiletype} logout={logout} />
        }
        else if(user.profiletype === 'DCG' || user.profiletype === 'Admin')
        {
            authLinks = <Dcg role={user.profiletype} logout={logout} />
        }
    }

    if(!user || user === undefined){
        navLinks = (
            <header className="header-section clearfix">
                <div className="container-fluid">
                    <Link to="/" className="site-logo"></Link>
                    <div className="responsive-bar"><i className="fa fa-bars"></i></div>
                    <Link to="/" className="user"><i className="fa fa-user"></i></Link>
                    <Link to="/sign-in" className="site-btn btn-link border-0 text-primary">Sign in</Link>
                </div>
            </header>
        )
    }
    else{
        navLinks = (
            <header className="header-section clearfix">
                {authLinks}
            </header>
        )
    }
    return <div>{navLinks}</div>
}

export default withRouter(Navbar);