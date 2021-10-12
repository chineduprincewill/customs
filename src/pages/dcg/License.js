import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo2.png';

const License = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>License</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <div className="row pb-3 mb-3">
                        <div className="col-md-12 text-center" id="print-div">
                            <img src={logo} className="p-3" />
                            <p>This is to certify that the Company ................................... is licensed to operate as an Excise Trader in the Federal Republic of Nigeria</p>
                            <p>With <b>Excise Trader Factory Number (ESN)</b></p>
                            <h2>ESN88383848</h2>
                            <p>On this day, ..............</p>
                        </div>
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                            <p><strong>Signed: ..............................................</strong></p>
                            <p className="mb-5"><strong>Deputy Controller General (DCG)</strong></p>
                            <p><strong>Signed: ..............................................</strong></p>
                            <p><strong>Customs Area Controller (CAC)</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default License;