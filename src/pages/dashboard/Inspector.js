import React from 'react';
import { Link } from 'react-router-dom';

const Inspector = () => {

    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">My Assignments</h5>
                                <h1 className="card-text text-dark text-center mb-3"><i className="fa fa-tasks mr-3"></i> </h1>
                                <Link to="/ins-assignments" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Inspector;