import React from 'react';
import { Link } from 'react-router-dom';

const Customer = () => {

    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="text text-success">Profile</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos perspiciatis distinctio a et ipsam, explicabo adipisci placeat obcaecati porro maiores? Facilis doloremque quisquam consequatur at dolor porro omnis similique.</p>
                        <Link to="/profile" className="btn btn-dark"><i className="fa fa-search"></i> view your profile</Link>
                    </div>
                    <div className="col-lg-4 border-left">
                        <h2 className="text text-success">Messages</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores, obcaecati, aut aliquam tempore officia temporibus odit, rerum minima qui deserunt suscipit porro corrupti soluta eum delectus perspiciatis ad tempora.</p>
                        <Link to="/messages" className="btn btn-dark"><i className="fa fa-search"></i> view your messages</Link>
                    </div>
                    <div className="col-lg-4 border-left">
                        <h2 className="text text-success">Form 41</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime saepe architecto dolores consequuntur dicta doloremque delectus repudiandae provident, amet obcaecati, totam consequatur aspernatur aperiam.</p>
                        <Link to="/form" className="btn btn-dark"><i className="fa fa-search"></i> Purchase Form 41</Link>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Customer;