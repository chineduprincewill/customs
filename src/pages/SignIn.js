import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../img/home-banner.png';
import Spinner from '../layout/Spinner';

const SignIn = (props) => {

    const [auth, setAuth] = useState({
        email:"",
        password:""
    });

    const [err, setErr] = useState("");

    const [loader, setLoader] = useState(false);


    const onChange = (e) => {

        setAuth({
            ...auth,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        //const apiUrl = 'http://imotechconnect.com/api/v1/auth';



        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/user/email/';

        axios.get(`${apiUrl}${auth.email}`)
        .then(res => {
            if(res.data.items[0].password === auth.password){
                localStorage.setItem("userData", JSON.stringify(res.data.items[0]));
                props.history.push("/dashboard");
            }
            else{
                setErr("Invalid Login Credentials!");
                setLoader(false);
            }   
        })
        .catch(err => {
            console.log(err);
            setErr("Invalid Login Credentials!");
            setLoader(false);
        })

    }

    return (
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Sign In</h2>
                    <div className="site-beradcamb">
                        <Link to="/">Home</Link>
                        <span><i className="fa fa-angle-right"></i>Excise Trader Sign In</span>
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
                            
                            <form className="contact-form ml-3" onSubmit={onSubmit}>
                                <div className="row">
                                    <p className="text text-danger ml-3">{err}</p>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="email"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Email/Username" 
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
                                    {loader ? <Spinner /> :
                                    <div className="col-md-12">
                                        <button className="site-btn btn-danger mt-4">Sign In</button>
                                    </div>
                                    }
                                    <small className="ml-3 mt-3"><Link to="/sign-up">Don't have an account yet? Click here to Sign up</Link></small>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(SignIn);