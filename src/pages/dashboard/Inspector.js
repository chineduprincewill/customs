import React from 'react';
import { Link } from 'react-router-dom';

const Inspector = () => {

    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text text-success">My Assignments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/ins-assignments" className="btn btn-dark"><i className="fa fa-search"></i> view your assignments</Link>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Inspector;