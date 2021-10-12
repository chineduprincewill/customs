import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo2.png';

const Cac = (props) => {

    const signOut = props.logout;

    return(
        <div className="container-fluid">
            <Link to="/" className="site-logo">
                <img src={logo} alt="logo" style={{ height:"70px" }} />
            </Link>
            <div className="responsive-bar"><i className="fa fa-bars"></i></div>
            <Link to="/" className="user"><i className="fa fa-user"></i></Link>
            <button className="site-btn btn-link text-danger border-0" onClick={signOut}><i className="fa fa-power-off text-danger mr-3"></i>Logout</button>
            <nav class="main-menu">
                <ul class="menu-list">
                    <li><button className="btn btn-warning mr-5">{props.role}</button></li>
                    <li><Link class="text text-dark" to="/zones">Zones</Link></li>
                    <li><Link class="text text-dark" to="/commands">Commands</Link></li>
                    <li><Link class="text text-dark" to="/users">Users</Link></li>
                    <li><Link class="text text-dark" to="/ins-assignments">Applications</Link></li>
                    <li><Link class="text text-dark" to="/license">License</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Cac;