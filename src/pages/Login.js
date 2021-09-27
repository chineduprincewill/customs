import React from 'react';

import { Link } from 'react-router-dom';
import homeImage from '../img/home-banner.png';

function Login () {

    return (
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Sign In</h2>
                    <div className="site-beradcamb">
                        <Link to="/">Home</Link>
                        <span><i className="fa fa-angle-right"></i>Sign In</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <img src={homeImage} className="laptop-image" alt="" />
                        </div>
                        <div className="col-lg-6 border-left">
                            <form className="contact-form ml-3" action="applications.html">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select className="form-control" name="zone">
                                                <option>Select Zone</option>
                                                <option value="HQ">Head Quaters</option>
                                                <option value="zone A">Zone A</option>
                                                <option value="zone B">Zone B</option>
                                                <option value="zone C">Zone C</option>
                                                <option value="zone D">Zone D</option>
                                                <option value="zone E">Zone E</option>
                                            </select>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="Email/Username" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="password" placeholder="Password" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <button className="site-btn btn-danger mt-4">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;