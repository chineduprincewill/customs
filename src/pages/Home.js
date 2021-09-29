import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../img/home-banner.png';

export default function Home () {

    return (
        <div>
            <section className="hero-section" style={{ marginTop: "-100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 hero-text text-right">
                            <h2 style={{ fontSize: "50px" }}>Excise Traders' <span>License</span> <br/>Procurment Portal</h2>
                            <h4>Obtain your Manufacturing License certificate from
                                our Automated portal by following the provided
                                Procedures Simplified to make the registration
                                and Certification Process simple and seamless
                                </h4>
                            <form className="hero-subscribe-from">
                                <Link to="/sign-in" className="site-btn btn-success">Get started ...</Link>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={homeImage} className="laptop-image" alt="" />
                        </div>
                    </div>
                    <div className="section-title text-center" style={{ marginTop: "-50px"}}>
                        <h2>How to get your license</h2>
                        <p>Below are the procedures to go through to get your license! </p>
                    </div>
             
                </div>
            </section>
            <section className="process-section spad" style={{ marginTop: "-100px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 process">
                            <div className="process-step">
                                <h4>Request for License</h4>
                                <p>Apply for your manufacturing
                                    License and upload the required
                                    documents to the portal for
                                    verification
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-3 process">
                            <div className="process-step">
                                <h4>Verification</h4>
                                <p>Your uploaded documents will
                                    Go through verification process
                                    To affirm that you are qualified
                                    To proceed with the process
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-3 process">
                            <div className="process-step">
                                <h4>Registration</h4>
                                <p>Once verification is approved
                                    You are required to complete
                                    The registration process and 
                                    Make required payment
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 process">
                            <div className="process-step">
                                <h4>Obtain your license</h4>
                                <p>Your application is completed
                                    And your license generated
                                    And forwarded to your
                                    Approved email.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}