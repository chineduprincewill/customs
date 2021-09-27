import React from 'react';
import { Link } from 'react-router-dom';

import Customer from './dashboard/Customer';
import Cac from './dashboard/Cac';
import Dcg from './dashboard/Dcg';

const Dashboard = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    let dashview;

    if(userData.profiletype === 'CUSTOMER'){
        dashview = <Customer />
    }
    else if(userData.profiletype === 'CAC'){
        dashview = <Cac />
    }
    else if(userData.profiletype === 'DCG'){
        dashview = <Dcg />
    }

    return (
        <div>
           	<section className="page-info-section">
                <div className="container">
                    <h2>Dashboard</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            {dashview}
        </div>
    );
}

export default Dashboard;