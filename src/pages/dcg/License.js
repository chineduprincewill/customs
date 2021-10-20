import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import logo from '../../img/logo2.png';
import sign from '../../img/sign.png';
import sign2 from '../../img/sing-2.png';
import Spinner from '../../layout/Spinner';

const License = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const { id } = useParams();

    const [licenseDetail, setLicenseDetail] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/license/form/'+id;

        axios.get(apiUrl)
          .then( res => {
                setLicenseDetail(res.data.items);
            })
          .catch( err => console.log(err))
    }, [id])

    console.log(licenseDetail);

    const printDiv = () => {
        var divContents = document.getElementById("print-div").innerHTML;
        var a = window.open('', '', 'height=3000, width=3000');
        a.document.write(divContents);
        a.document.close();
        a.print();
    }


    
    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }


    let licenseInformation;

    if(licenseDetail === undefined || licenseDetail.length === 0 )
    {
        licenseInformation = <Spinner />
    }
    else{

        licenseInformation =    
        <div className="row" id="print-div">
            <div  style={{ width : "100%" , marginBottom : "20px", textAlign : "center", marginTop : "30px" }}>
                <img src={logo} alt="logo" className="p-3" />
                <p>This is to certify that the Company <strong>{licenseDetail[0].FORM41 && licenseDetail[0].FORM41[0].CNAME}</strong> is licensed to operate as an Excise Trader in the Federal Republic of Nigeria</p>
                <p>With <b>Excise Factory Number (EFN)</b></p>
                <h2>{licenseDetail[0].EXCISE_NUMBER}</h2>
                <p>On this day, <strong>{removeDateParts(licenseDetail[0].ISSUEDATE)}</strong></p>
            </div>
            <div className="col-md-4">
                <p style={{ marginTop : "30px" }}><strong>Signed: <img src={sign} style={{ width : "150px "}} alt="signature" /></strong></p>
                <p><strong>Deputy Controller General (DCG)</strong></p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                
                <p style={{ textAlign : "right", marginTop : "30px" }}><strong>Signed: <img src={sign2} style={{ width : "150px "}} alt="signature" /></strong></p>
                <p style={{ textAlign : "right" }}><strong>Customs Area Controller (CAC)</strong></p>
            </div>
        </div>

    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>License</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    {licenseInformation}
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary mt-3 mr-5 float-right" onClick={printDiv}>Print License</button>
                </div>
            </section>
        </div>
    )
}

export default License;