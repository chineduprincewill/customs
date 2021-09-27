import React from 'react';
import { Link } from 'react-router-dom';

const Applications = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Applications</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container"></div>
            </section>
        </div>
    )
}

export default Applications;