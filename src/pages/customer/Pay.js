import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import homeImage from '../../img/home-banner.png';
import Spinner from '../../layout/Spinner';

const Pay = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [payInfo, setPayInfo] = useState({
        tellerNo : "",
        bank : "",
        amount : 12000
    });

    const [loader, setLoader] = useState(false);
    const [err, setErr] = useState("");

    const onChange = (e) => {

        setPayInfo({
            ...payInfo,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);
        
        setErr("Payment has been successfully made. You will be notified on the progress of your submission!");

        setLoader(false);

    }



    return(
        <div>
             <section className="page-info-section">
                <div className="container">
                    <h2>Pay for Form41</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
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
                                    <p className="text text-success ml-3">{err}</p>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="tellerNo"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Enter teller no." 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select 
                                                name="bank"
                                                className="form-control border-0 pl-0"
                                                onChange={onChange}
                                            >
                                                <option value="">SELECT BANK</option>
                                                <option value="First Bank of Nigeria">First Bank of Nigeria</option>
                                                <option value="Access Bank">Access Bank</option>
                                                <option value="Zenith Bank">Zenith Bank</option>
                                                <option value="Fidelity Bank">Fidelity Bank</option>
                                            </select>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="amount"
                                                value={`NGN ${payInfo.amount}.00`}
                                                className="check-form" 
                                                type="text" 
                                                readOnly
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    {loader ? <Spinner /> :
                                    <div className="col-md-12">
                                        <button className="site-btn btn-success border-success btn-block mt-4">Pay</button>
                                    </div>
                                    }
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pay;