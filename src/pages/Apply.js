import React from 'react';

import { Link } from 'react-router-dom';
import homeImage from '../img/home-banner.png';

export default function Apply () {

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Apply</h2>
                    <div className="site-beradcamb">
                        <Link to="/">Home</Link>
                        <span><i className="fa fa-angle-right"></i>Excise Trader Sign Up</span>
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
                            <form className="contact-form ml-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="Company Name" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Description of Business" className="form-control"></textarea>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Purpose of Business" className="form-control"></textarea>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="RC Number" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="TIN Number" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="Location" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="check-form" type="text" placeholder="Phone Number" />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <button className="site-btn btn-danger btn-block mt-4">Sign Up</button>
                                    </div>
                                    <small className="ml-3 mt-3"><Link to="/sign-in">Already have an account yet? Click here to Sign in</Link></small>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}