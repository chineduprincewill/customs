import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import moment from 'moment';

import Spinner from '../../layout/Spinner';

const Assignments = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/operations/allocation/all/';

        axios.get(apiUrl)
          .then( res => {
                setAssignments(res.data.items);
            })
          .catch( err => console.log(err))
    }, [])

    console.log(assignments);

    let allocations;

    if(assignments === undefined || assignments.length === 0){
        allocations = <Spinner />
    }
    else{
        allocations = assignments.map(item => (
            <tr key={item.ALLOCATIONID} >
                <td>{item.TRADER_USER_DETAILS ? item.TRADER_USER_DETAILS[0].FIRSTNAME + " "+item.TRADER_USER_DETAILS[0].LASTNAME+" ("+item.TRADER_USER_DETAILS[0].USERID+")" : ""}</td>
                <td>{item.OCO_USER_DETAILS ? item.OCO_USER_DETAILS[0].FIRSTNAME + " "+item.OCO_USER_DETAILS[0].LASTNAME+" ("+item.OCO_USER_DETAILS[0].USERID+")" : ""}</td>
                <td>{item.MESSAGE}</td>
                <td>{item.ASSIGNMENT_DATE}</td>
                <td>{item.EXPIRY_DATE}</td>
                <td><Link className="btn btn-link text-info" to={`alloc-detail/${item.ALLOCATIONID}`}><i className="fa fa-search"></i></Link></td>
            </tr>
        ))
    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Inspection Assignments</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td>EXCISE TRADER</td>
                                <td>ASSIGNED OFFICER</td>
                                <td>MESSAGE</td>
                                <td>ASSIGNMENT DATE</td>
                                <td>EXPIRY DATE</td>
                                <td>...</td>
                            </tr>
                        </thead>
                        <tbody style={{ color:"#7d7c7c"}}>
                            {allocations}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Assignments;