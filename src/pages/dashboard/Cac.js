import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cac = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [processing, setProcessing] = useState();

    useEffect(() => {

        const url = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/0';

        axios.get(url)
          .then( res => {
                setProcessing(res.data.items);
            })
          .catch( err => console.log(err))
    }, []);

    console.log(processing);
    let processingCount;

    if(processing === undefined || processing.length === 0){
        processingCount = "...";
    }
    else{
        processingCount = 0;

        processing.map(item => {
           if(item.STATUS === 1 && item.COMMAND[0].COMMANDID === userData.commandid){
                processingCount += 1;
           } 
           return processingCount;
        })
    }


    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Form41</h5>
                                <h1 className="card-text text-dark text-center mb-3"><i className="fa fa-tasks mr-3"></i> </h1>
                                <Link to="/form41-list" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 border-left">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Assignments</h5>
                                <h1 className="card-text text-dark text-center mb-3"><i className="fa fa-calendar mr-3"></i> </h1>
                                <Link to="/assignments" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="row border-top mt-5 py-5">
                    <div className="col-md-1 text-success">
                        <i style={{ fontSize : "80px" }} className="fa fa-signal"></i>
                    </div>
                    <div className="col-md-11">
                        <p className="mt-2"><span className="py-4 text-danger">There are <strong>{processingCount}</strong> form41 application(s) requiring your attention and further action.</span></p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cac;