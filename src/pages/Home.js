import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement
} from 'mdb-react-ui-kit';

import slide1 from '../img/slides/slide1.jpg';
import slide2 from '../img/slides/slide2.jpg';
import slide3 from '../img/slides/slide3.jpg';

export default function Home () {

    return (
        <div>
            <section className="hero-section border-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 hero-text text-right">
                            <h2 style={{ fontSize: "50px" }} className="mt-4"><span>Excise Traders' License <br/>Procurement Portal</span></h2>
                            <h4>Obtain your Manufacturing License certificate from
                                our Automated portal by following the provided
                                Procedures Simplified to make the registrationnpm
                                and Certification Process simple and seamless
                                </h4>
                            <form className="hero-subscribe-from">
                                <Link to="/sign-in" className="site-btn btn-success border-success">Get started ...</Link>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <MDBCarousel showIndicators showControls>
                                
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId={0}>
                                        <MDBCarouselElement className="d-block w-100" src={slide1} alt="First slide" />
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId={1}>
                                        <MDBCarouselElement  className="d-block w-100" src={slide2} alt="Second slide" />
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId={2}>
                                        <MDBCarouselElement  className="d-block w-100" src={slide3} alt="Third slide" />
                                    </MDBCarouselItem>
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </div>
                    </div>
             
                </div>
            </section>
            <section className="process-section spad" style={{ marginTop: "-70px", backgroundColor: "#eaebeb" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 section-title text-center">
                            <h2 className="text-dark">How to get your license</h2>
                            <p className="text-success">Below are the procedures to go through to get your license! </p>
                        </div>
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