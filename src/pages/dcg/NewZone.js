import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../../img/home-banner.png';

import Spinner from '../../layout/Spinner';

const NewZone = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [zone, setZone] = useState({
        Name: "",
        SlogName: ""
    });

    const [loader, setLoader] = useState(false);

    const [err, setErr] = useState("");

    const onChange = (e) => {

        setZone({
            ...zone,
            [e.target.name] : e.target.value
        })
        
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/zones/';

        const fdata = new FormData();
        fdata.append('Name', zone.Name);
        fdata.append('SlogName', zone.SlogName);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        console.log(fdata);
        console.log(JSON.stringify(fdata))

        axios
            .post(regUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    props.history.push("/zones");
                }
                else{
                    setErr("Zone could not be added! Try again");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Zone could not be added! Try again");
                setLoader(false);
            });


    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>New Zone</h2>
                    <div className="site-beradcamb">
                        <Link to="/"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>

            <section className="contact-page spad">
                <div className="container">
                    <div className="row pb-3 mb-3">
                        <div className="col-md-12">
                            <Link to="/zones" className="btn btn-dark float-right">Return to Zones</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <img src={homeImage} className="laptop-image" alt="" />
                        </div>
                        <div className="col-lg-6 border-left">
                            <p className="text text-danger">{err}</p>
                            <form className="contact-form ml-3" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="Name"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Zone Name" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="SlogName"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Zone Slug Name"
                                                onChange={onChange} 
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    {loader ? <Spinner /> :
                                    <div className="col-md-12">
                                        <button className="site-btn btn-success border-success btn-block mt-4">Create zone</button>
                                    </div>
                                    }
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(NewZone);