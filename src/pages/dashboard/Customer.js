import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Customer = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [userForms, setUserForms] = useState();

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/user/'+userData.userid;

        axios.get(apiUrl)
          .then( res => {
                setUserForms(res.data.items);
            })
          .catch( err => console.log(err))
    }, [userData.userid]);

    console.log(userForms);


    let myFormStatus;

    if(userForms === undefined || userForms.length === 0 ){
        myFormStatus = <tr><td colSpan="6"><span className="text text-danger my-2">Your Form41 status record(s) will load here if you have any! Or Click <Link to="/form" className="text text-info"><strong>here</strong></Link> to fill a Form41</span></td></tr>
    }
    else{
        myFormStatus = userForms.map(item => (
            <Link to={`myform-detail/${item.IDFORM}`} className="row py-2 border-bottom text-dark" key={item.IDFORM} >
                <div className="col-md-2">ID : {item.IDFORM}</div>
                <div className="col-md-4">REF : {item.FORMREF}</div>
                <div className="col-md-6">
                        {item.STATUS === 0 && <span className="text text-warning ml-5">Processing ...</span>}
                        {item.STATUS === 1 && <span className="text text-primary ml-5">Provisional License</span>}
                        {item.STATUS === 2 && <span className="text text-success ml-5">Licensed</span>}
                        {item.STATUS === 3 && <span className="text text-danger ml-5">Declined</span>}
                </div>
            </Link>
        ))
    }



    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">                
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Profile</h5>
                                <h1 className="card-text text-dark text-center mb-3"><i className="fa fa-user mr-3"></i> </h1>
                                <Link to="/profile" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 border-left">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Form 41</h5>
                                <h1 className="card-text text-dark text-center mb-3"><i className="fa fa-edit mr-3"></i> </h1>
                                <Link to="/form" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="row mt-5 border-top p-3">                
                    <div className="col-lg-3">
                        <h1><i className="fa fa-align-right text-success" style={{ fontSize : "200px" }}></i></h1>
                    </div>
                    <div className="col-lg-9 border-left">
                        <h5 className="bg-dark text-white p-2 mb-3">Form41 Application(s) status</h5>
                        {myFormStatus}
                    </div>  
                </div>
            </div>
        </section>

        

    )
}

export default Customer;