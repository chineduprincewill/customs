import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Customer from './navlinks/Customer';
import Cac from './navlinks/Cac';
import Dcg from './navlinks/Dcg';
import Inspector from './navlinks/Inspector';
import logo from '../img/logo2.png';
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
        else if(user.profiletype === 'INSPECTOR' || user.profiletype === 'INSPECTOR')
        {
            authLinks = <Inspector role={user.profiletype} logout={logout} />
        }
    }

    if(!user || user === undefined){
        navLinks = (
            <header className="header-section clearfix">
                <div className="container-fluid">
                    <Link to="/" className="site-logo">
                        <img src={logo} alt="logo" style={{ height:"70px" }} />
                    </Link>
                    <div className="responsive-bar"><i className="fa fa-bars"></i></div>
                    <Link to="/" className="user"><i className="fa fa-user"></i></Link>
                    <Link to="/sign-in" className="site-btn btn-link border-0 text-dark">Sign in</Link>
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