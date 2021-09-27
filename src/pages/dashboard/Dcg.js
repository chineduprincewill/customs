import React from 'react';
import { Link } from 'react-router-dom';

const Dcg = () => {

    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Zones</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/zones" className="btn btn-danger"><i className="fa fa-search"></i> manage zones</Link>
                    </div>
                    <div className="col-lg-4 border-left">
                        <h2>Commands</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/commands" className="btn btn-danger"><i className="fa fa-search"></i> manage commands</Link>
                    </div>
                    <div className="col-lg-4 border-left">
                        <h2>Users</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/users" className="btn btn-danger"><i className="fa fa-search"></i> manage users accounts</Link>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h2>Applications</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/applications" className="btn btn-danger"><i className="fa fa-search"></i> manage excise traders submissions</Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Dcg;