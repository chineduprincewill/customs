import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';
import ShowLicenses from './ShowLicenses';

const LicenseList = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [licenses, setLicenses] = useState();

    const [searchLicense, setSearchLicense] = useState("");

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/license/';

        axios.get(apiUrl)
          .then( res => {
                setLicenses(res.data.items);
            })
          .catch( err => console.log(err))
    }, []);

    const onChange = (e) => {
        setSearchLicense(e.target.value)

        console.log(searchLicense);
    }


    let LicenseListing;

    if(licenses === undefined || licenses.length === 0 ){
        LicenseListing = <Spinner />
    }
    else{
        LicenseListing = <ShowLicenses licenses={licenses} efn={searchLicense}/>
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
                <form>
                        <div className="row p-3 border-bottom">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="excisenumber"
                                        className="form-control"
                                        placeholder="Enter Excise Number"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-9">
                            </div>
                        </div>
                    </form>

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