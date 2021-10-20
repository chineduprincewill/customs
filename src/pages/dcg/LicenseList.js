import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';

const LicenseList = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [licenses, setLicenses] = useState();

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/license/';

        axios.get(apiUrl)
          .then( res => {
                setLicenses(res.data.items);
            })
          .catch( err => console.log(err))
    }, []);


    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }


    let LicenseListing;

    if(licenses === undefined || licenses.length === 0 ){
        LicenseListing = <Spinner />
    }
    else{
        LicenseListing = licenses.map(item => (
            <tr key={item.IDLICENSE} >
                <td>{item.IDFORM}</td>
                <td>{item.IDLICENSE}</td>
                <td>{item.FORM41 ? item.FORM41[0].CNAME : "..."}</td>
                <td>{removeDateParts(item.ISSUEDATE)}</td>
                <td>{removeDateParts(item.EXPIRYDATE)}</td>
                <td>{item.APPROVEDBY}</td>
                <td>{item.EXCISE_NUMBER}</td>
                <td>
                    {item.STATUS === 1 && <span className="text text-primary">Provisional License</span>}
                    {item.STATUS === 2 && <span className="text text-success">License</span>}
                </td>
                <td>
                    {item.STATUS === 1 && <Link className="btn btn-link text-primary" to={`pr-license/${item.IDFORM}`}><i className="fa fa-search"></i></Link>}
                    {item.STATUS === 2 && <Link className="btn btn-link text-primary" to={`license/${item.IDFORM}`}><i className="fa fa-search"></i></Link>}
                    
                </td>
            </tr>
        ))
    }

    console.log(licenses);

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Licenses</h2>
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
                                <td>FORM ID</td>
                                <td>LICENSE ID</td>
                                <td>COMPANY NAME</td>
                                <td>ISSUE DATE</td>
                                <td>EXPIRY DATE</td>
                                <td>APPROVED BY</td>
                                <td>EXCISE NUMBER</td>
                                <td>STATUS</td>
                                <td>...</td>
                            </tr>
                        </thead>
                        <tbody style={{ color:"#7d7c7c"}}>
                            {LicenseListing}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default LicenseList;