import React from 'react';
import { Link } from 'react-router-dom';

const Cac = () => {

    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text text-success">Form41 List</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/form41-list" className="btn btn-dark"><i className="fa fa-search"></i> view form41 list</Link>
                    </div>
                    <div className="col-lg-6 border-left">
                        <h2 className="text text-success">Assignments</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/assignments" className="btn btn-dark"><i className="fa fa-search"></i> view assignments</Link>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Cac;