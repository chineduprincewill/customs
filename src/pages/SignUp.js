import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../img/home-banner.png';

import Spinner from '../layout/Spinner';

const SignUp = (props) => {

    const [regInfo, setRegInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        profileType: "CUSTOMER",
        commandId: ""
    });

    const [command, setCommand] = useState([]);

    const [loader, setLoader] = useState(false);

    const [err, setErr] = useState("");


    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/';

        axios.get(apiUrl)
          .then( res => {
              setCommand(res.data.items);
            })
          .catch( err => console.log(err))

    }, []);

    
    const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
    };
    //console.log(generateRandomNumber(100, 200));

    const onChange = (e) => {

        setRegInfo({
            ...regInfo,
            [e.target.name] : e.target.value
        })
        
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        const userRand = generateRandomNumber(10000, 99999);
        const userId = `ET${userRand}`;
        console.log(userId);
        //const apiUrl = 'http://imotechconnect.com/api/v1/auth';

        //const regData = {
        //    userId : userId,
        //    ...regInfo
        //}

        console.log(regInfo);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/';

        const fdata = new FormData();
        fdata.append('userId', userId);
        fdata.append('firstName', regInfo.firstName);
        fdata.append('lastName', regInfo.lastName);
        fdata.append('email', regInfo.email);
        fdata.append('password', regInfo.password);
        fdata.append('phone', regInfo.phone);
        fdata.append('profileType', regInfo.profileType);
        fdata.append('commandId', regInfo.commandId);

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
                    props.history.push("/sign-in");
                }
                else{
                    setErr("Sign up Unsuccessful! Contact Admin");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Sign up Unsuccessful! Contact Admin");
                setLoader(false);
            });


    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Apply</h2>
                    <div className="site-beradcamb">
                        <Link to="/">Home</Link>
                        <span><i className="fa fa-angle-right"></i>Excise Trader Sign Up</span>
                    </div>
                </div>
            </section>

            <section className="contact-page spad">
                <div className="container">
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
                                                name="firstName"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="First Name" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="lastName"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Last Name"
                                                onChange={onChange} 
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="email"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Email" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="password"
                                                className="check-form" 
                                                type="password" 
                                                placeholder="Password" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="phone"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Phone" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select 
                                                name="profileType"
                                                className="form-control border-0 pl-0"
                                                onChange={onChange}
                                            >
                                                <option value="CUSTOMER">CUSTOMER</option>
                                            </select>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select 
                                                name="commandId"
                                                className="form-control border-0 pl-0"
                                                onChange={onChange}
                                            >
                                                <option value="">Select Command</option>
                                                { command.map(cmd => (
                                                    <option key={cmd.commandid} value={cmd.commandid}>{cmd.commandname}</option>
                                                ))}
                                            </select>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    {loader ? <Spinner /> :
                                    <div className="col-md-12">
                                        <button className="site-btn btn-success btn-block border-success mt-4">Sign Up</button>
                                    </div>
                                    }
                                    <small className="ml-3 mt-3"><Link to="/sign-in">Already have an account yet? Click here to Sign in</Link></small>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(SignUp);