import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo2.png';

const Dcg = (props) => {

    const signOut = props.logout;

    return(
        <div className="container-fluid">
            <Link to="/" className="site-logo">
                <img src={logo} alt="logo" style={{ height:"70px" }} />
            </Link>
            <div className="responsive-bar"><i className="fa fa-bars"></i></div>
            <Link to="/" className="user"><i className="fa fa-user"></i></Link>
            <button className="site-btn btn-link text-danger border-0" onClick={signOut}><i className="fa fa-power-off text-danger mr-3"></i>Logout</button>
            <nav className="main-menu">
                <ul className="menu-list">
                    <li><Link to="/dashboard" className="btn btn-warning mr-5 px-3">{props.role}</Link></li>
                    <li><Link className="text text-dark" to="/zones">Zones</Link></li>
                    <li><Link className="text text-dark" to="/commands">Commands</Link></li>
                    <li><Link className="text text-dark" to="/users">Users</Link></li>
                    <li><Link className="text text-dark" to="/ins-assignments">Applications</Link></li>
                    <li><Link className="text text-dark" to="/form41-report">Form41 Report</Link></li>
                    <li><Link className="text text-dark" to="/license-list">License List</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Dcg;