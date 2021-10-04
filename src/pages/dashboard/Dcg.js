import React from 'react';
import { Link } from 'react-router-dom';

const Dcg = () => {

    return(
        <section className="contact-page spad">
            <div className="container-fluid">
                <div className="row px-5">
                    <div className="col-lg-3">
                        <h3 className="text text-success">Zones</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/zones" className="btn btn-dark"><i className="fa fa-search"></i> manage zones</Link>
                    </div>
                    <div className="col-lg-3 border-left">
                        <h3 className="text text-success">Commands</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/commands" className="btn btn-dark"><i className="fa fa-search"></i> manage commands</Link>
                    </div>
                    <div className="col-lg-3 border-left">
                        <h3 className="text text-success">Users</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/users" className="btn btn-dark"><i className="fa fa-search"></i> manage users accounts</Link>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="text text-success">Applications</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/applications" className="btn btn-dark"><i className="fa fa-search"></i> manage excise traders submissions</Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Dcg;