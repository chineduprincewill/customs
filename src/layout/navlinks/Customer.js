import React from 'react';
import { Link } from 'react-router-dom';

const Customer = (props) => {

    const signOut = props.logout;

    return(
        <div className="container-fluid">
            <Link to="/" className="site-logo"></Link>
            <div className="responsive-bar"><i className="fa fa-bars"></i></div>
            <Link to="/" className="user"><i className="fa fa-user"></i></Link>
            <button className="site-btn btn-link text-danger border-0" onClick={signOut}><i className="fa fa-power-off text-danger mr-3"></i>Logout</button>
            <nav className="main-menu">
                <ul className="menu-list">
                    <li><button className="btn btn-warning mr-5">{props.role}</button></li>
                    <li><Link className="text text-primary" to="/profile">Profile</Link></li>
                    <li><Link className="text text-primary" to="/messages">Messages</Link></li>
                    <li><Link className="text text-primary" to="/myforms">Form 41</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Customer;