import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner';


const Zones = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [zones, setZones] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/zones/';

        axios.get(apiUrl)
          .then( res => {
                setZones(res.data.items);
            })
          .catch( err => console.log(err))

    }, []);


    let zonelist;

    if(zones === undefined || zones.length === 0){
        zonelist = <Spinner />
    }
    else{
        zonelist = zones.map(item => (
            <tr key={item.idzone} >
                <td>{item.idzone}</td>
                <td>{item.zonename}</td>
                <td>{item.zoneslugname}</td>
             </tr>
        ))
    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Zones</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                <div className="row pb-3 mb-3">
                        <div className="col-md-12">
                            <Link to="/new-zone" className="btn btn-dark float-right"><i className="fa fa-plus"></i> New Zone</Link>
                        </div>
                    </div>
                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td><strong>ZONE ID</strong></td>
                                <td><strong>ZONE NAME</strong></td>
                                <td><strong>ZONE SLUG NAME</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            {zonelist}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Zones;