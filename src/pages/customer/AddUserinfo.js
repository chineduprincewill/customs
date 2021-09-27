import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Spinner from '../../layout/Spinner';

const AddUserinfo = (props) => {

    const [businessInfo, setBusinessInfo] = useState({
        companyName: "",
        descriptionOfBusiness: "",
        purposeOfBusiness: "",
        rcNumber: "",
        tinNumber: "",
        isAdmin: "0",
        userId: props.id,
        location: "",
        phoneNumber: ""
    });

    const [loader, setLoader] = useState(false);

    const [success, setSuccess] = useState("");
    const [err, setErr] = useState("");

    const onChange = (e) => {

        setBusinessInfo({
            ...businessInfo,
            [e.target.name] : e.target.value
        })
        
    };


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        console.log(businessInfo);

        const bizUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/userinfo/';

        const fdata = new FormData();
        fdata.append('companyName', businessInfo.companyName);
        fdata.append('descriptionOfBusiness', businessInfo.descriptionOfBusiness);
        fdata.append('purposeOfBusiness', businessInfo.purposeOfBusiness);
        fdata.append('rcNumber', businessInfo.rcNumber);
        fdata.append('tinNumber', businessInfo.tinNumber);
        fdata.append('isAdmin', businessInfo.isAdmin);
        fdata.append('userId', businessInfo.userId);
        fdata.append('location', businessInfo.location);
        fdata.append('phoneNumber', businessInfo.phoneNumber);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        console.log(fdata);
        console.log(JSON.stringify(fdata))

        axios
            .post(bizUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    setSuccess("Business Information Successfully Added!");
                    setLoader(false);
                }
                else{
                    setErr("Business Information was not added successfully! Try again");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Business Information was not added successfully! Try again");
                setLoader(false);
            });


    }
    
    return(
        <div>
            <p class="text text-danger mb-3">Oops! Business detail not available!</p>
            <h3 className="text text-primary border-bottom py-2">Add Business Detail</h3>
            <p><span className="text text-success">{success}</span><span className="text text-danger">{err}</span></p>
            <form className="contact-form ml-3" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="companyName"
                                className="check-form" 
                                type="text" 
                                placeholder="Company Name" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="descriptionOfBusiness"
                                className="check-form" 
                                placeholder="Description of Business"
                                onChange={onChange} 
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="purposeOfBusiness"
                                className="check-form" 
                                placeholder="Purpose of Business"
                                onChange={onChange} 
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="rcNumber"
                                className="check-form" 
                                type="text" 
                                placeholder="RC Number" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="tinNumber"
                                className="check-form" 
                                type="tinNumber" 
                                placeholder="TIN Number" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="location"
                                className="check-form" 
                                type="text" 
                                placeholder="Location" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="phoneNumber"
                                className="check-form" 
                                type="text" 
                                placeholder="Phone Number" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    {loader ? <Spinner /> :
                    <div className="col-md-12">
                        <button className="site-btn btn-danger btn-block mt-4"><i className="fa fa-plus"></i></button>
                    </div>
                    }
                </div>
            </form>
                          
        </div>
    )
}

export default withRouter(AddUserinfo);