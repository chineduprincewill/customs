import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import logo from '../../img/logo2.png';
import Spinner from '../../layout/Spinner';

const ProvisionalLicense = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const { id } = useParams();

    const [formDetail, setFormDetail] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/'+id;

        axios.get(apiUrl)
          .then( res => {
                setFormDetail(res.data.items);
            })
          .catch( err => console.log(err))
    }, [id])

    console.log(formDetail);

    const printDiv = () => {
        var divContents = document.getElementById("print-div").innerHTML;
        var a = window.open('', '', 'height=2000, width=2000');
        a.document.write(divContents);
        a.document.close();
        a.print();
    }

    let licenseInformation;

    if(formDetail === undefined || formDetail.length === 0 )
    {
        licenseInformation = <Spinner />
    }
    else{

        licenseInformation =  
        <div className="row" id="print-div">
            <div  style={{ width : "100%" , marginBottom : "20px", textAlign : "center", marginTop : "30px" }}>
                <img src={logo} className="p-3" alt="logo" />
                <h3 style={{ color: "#47494c", marginBottom : "10px" }}><strong>PROVISIONAL LICENSE</strong></h3>
                <p>This is to certify that the Company <strong>{formDetail[0].CNAME}</strong> is licensed to commence the construction of it's facility</p>
                <p>With <b>Provisional License Number</b></p>
                <h2>PLN-{formDetail[0].IDFORM}{formDetail[0].FORMREF}</h2>
                <p>On this day, <strong>{date}</strong></p>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <p style={{ textAlign : "right", marginTop : "30px" }}><strong>Signed: ..............................................</strong></p>
                <p style={{ textAlign : "right" }}><strong>Customs Area Controller (CAC)</strong></p>
            </div>
        </div>

    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Provisional License</h2>
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

export default ProvisionalLicense;