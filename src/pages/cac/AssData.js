import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';
import SenderData from '../SenderData';

const AssData = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [loader, setLoader] = useState(false);
    const [caloader, setCaloader] = useState(false);
    const [daloader, setDaloader] = useState(false);
    const [dloader, setDloader] = useState(false);

    const [getComments, setGetComments] = useState();

    const [formInfo, setFormInfo] = useState();

    const [appStatus, setAppStatus] = useState();

    const [comment, setComment] = useState({
        message: ""
    });

    const [err, setErr] = useState("");
    const [success, setSuccess] = useState("");

    const { assInfo } = props;

    var str = assInfo[0].MESSAGE;

    var formID = str.replace(/ .*/,'');


    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/comments/'+formID;

        axios.get(apiUrl)
          .then( res => {
                setGetComments(res.data.items);
            })
          .catch( err => console.log(err))
        
        // get form41 information 
        const formUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/'+formID;

        axios.get(formUrl)
        .then( res => {
                setAppStatus(res.data.items[0].STATUS);
            })
        .catch( err => console.log(err))

    }, [formID])

    console.log(appStatus);

    const onChange = (e) => {

        setComment({
            ...comment,
            [e.target.name] : e.target.value
        })
        
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/comment/';

        const fdata = new FormData();
        fdata.append('idform', formID);
        fdata.append('iduser', userData.userid);
        fdata.append('message', comment.message);

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
                    props.history.push("/ins-assignments");
                }
                else{
                    setErr("Comment could not be submitted! Try again");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Comment could not be submitted! Try again");
                setLoader(false);
            });


    }

    const removeIdFromMessage = (message) => {

        var str = message;
        var strArr = str.split(":");

        return strArr[1];
    }


    const saveLicense = (formid, approvedBy, formStatus, comment, ExciseNumber) => {

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        var expiry = new Date(),
        expiryDate = expiry.getFullYear() + '-12-31';

        const licenseUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/license/';

        const fdata = new FormData();
        fdata.append('idForm', formid);
        fdata.append('IssueDate', date);
        fdata.append('ExpiryDate', expiryDate);
        fdata.append('ApprovedBy', approvedBy);
        fdata.append('Status', formStatus);
        fdata.append('Comments', comment);
        fdata.append('exciseNumber', ExciseNumber);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios
            .post(licenseUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    console.log(res.data.result);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }


    const cacApproval = () => {
        setCaloader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/update/';

        const fdata = new FormData();
        fdata.append('status', "1");
        fdata.append('id', formID);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios
            .post(regUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    const num = Math.floor((Math.random() * 100000) + 1);
                    const exciseNumber = `PLN-${formID}-${num}`;
                    setSuccess("Form Approved for temporary License!");
                    saveLicense(formID, userData.userid, 1, "Provisional License issued to Excise Trader", exciseNumber);
                    setCaloader(false);
                }
                else{
                    setErr("Form could not be approved! Try again");
                    setCaloader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Form could not be approved! Try again");
                setCaloader(false);
            });
    }


    const dcgApproval = () => {
        setCaloader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/update/';

        const fdata = new FormData();
        fdata.append('status', "2");
        fdata.append('id', formID);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios
            .post(regUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    const num = Math.floor((Math.random() * 100000) + 1);
                    const exciseNumber = `EFN-${formID}-${num}`;
                    setSuccess("Form Approved for temporary License!");
                    saveLicense(formID, userData.userid, 2, "License issued to Excise Trader", exciseNumber);
                    setDaloader(false);
                }
                else{
                    setErr("Form could not be approved! Try again");
                    setDaloader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Form could not be approved! Try again");
                setDaloader(false);
            });
    }


    const decline = () => {
        setDloader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/update/';

        const fdata = new FormData();
        fdata.append('status', "3");
        fdata.append('id', formID);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios
            .post(regUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    setSuccess("Application Declined!");
                    setDloader(false);
                }
                else{
                    setErr("Application could not be declines! Try again");
                    setDloader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Application could not be declines! Try again");
                setDloader(false);
            });
    }


    let commentList;

    if(getComments === undefined || getComments.length === 0){
        commentList = <div className="alert alert-warning p-3">No Comments!</div>
    }
    else{
        commentList = getComments.map(item => (
            <div className="col-md-12 border-bottom"  key={item.idcomment}>
                <div className="row my-3">
                    <div className="col-md-3">Sender</div>
                    <div className="col-md-9">
                        <SenderData userid={item.iduser} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-3">Message</div>
                    <div className="col-md-9">
                        {item.message}
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-3">Date</div>
                    <div className="col-md-9">
                        {removeDateParts(item.message_date)}
                    </div>
                </div>
            </div>
        ))
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    {userData.profiletype === "INSPECTOR" && <Link to="/ins-assignments" className="btn btn-dark float-right my-3">Assignments</Link>}
                </div>
                <div className="col-md-6">
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">FORM STATUS</div>
                        <div className="col-md-8">
                            {appStatus === 0 && <span className="text text-primary">Processing ...</span>}
                            {appStatus === 1 && <span className="text text-info">Provisional License</span>}
                            {appStatus === 2 && <span className="text text-success">Licensed</span>}
                            {appStatus === 3 && <span className="text text-danger">Declined!</span>}
                        </div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">EXCISE TRADER</div>
                        <div className="col-md-8">{assInfo[0].TRADER_USER_DETAILS ? assInfo[0].TRADER_USER_DETAILS[0].FIRSTNAME+" "+assInfo[0].TRADER_USER_DETAILS[0].LASTNAME : ""}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">MOBILE</div>
                        <div className="col-md-8">{assInfo[0].TRADER_USER_DETAILS ? assInfo[0].TRADER_USER_DETAILS[0].PHONE : ""}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">EMAIL</div>
                        <div className="col-md-8">{assInfo[0].TRADER_USER_DETAILS ? assInfo[0].TRADER_USER_DETAILS[0].EMAIL : ""}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">ASSIGNER</div>
                        <div className="col-md-8">{assInfo[0].ASSIGNING_USER_DETAILS ? assInfo[0].ASSIGNING_USER_DETAILS[0].FIRSTNAME+" "+assInfo[0].ASSIGNING_USER_DETAILS[0].LASTNAME +" ("+assInfo[0].ASSIGNING_USER_DETAILS[0].PROFILETYPE+")" : ""}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">ASSIGNEE</div>
                        <div className="col-md-8">{assInfo[0].OCO_USER_DETAILS ? assInfo[0].OCO_USER_DETAILS[0].FIRSTNAME+" "+assInfo[0].OCO_USER_DETAILS[0].LASTNAME +" ("+assInfo[0].OCO_USER_DETAILS[0].PROFILETYPE+")" : ""}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">FORM DETAIL</div>
                        <div className="col-md-8">
                            <Link to={`/myform-detail/${formID}`} className="site-btn btn-primary border-primary">
                                <i className="fa fa-search mr-2"></i> view form detail
                            </Link>
                        </div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">MESSAGE</div>
                        <div className="col-md-8">{removeIdFromMessage(assInfo[0].MESSAGE)}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">DATE ASSIGNED</div>
                        <div className="col-md-8">{removeDateParts(assInfo[0].ASSIGNMENT_DATE)}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">EXPIRY DATE</div>
                        <div className="col-md-8">{removeDateParts(assInfo[0].EXPIRY_DATE)}</div>
                    </div>
                </div>
                <div className="col-md-6 border-left">
                        <form className="contact-form ml-3" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mb-5 pb-1 text-success border-bottom">Add Comment</h4>
                                    <p className="text text-danger">{err}</p>
                                    <div className="form-group">
                                        <textarea 
                                            name="message"
                                            className="form-control border-0 pl-0"
                                            onChange={onChange}
                                            placeholder="Add comment"
                                        >
                                        </textarea>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                    {loader ? <Spinner /> :
                                        <div className="col-md-12">
                                            <button className="site-btn btn-success btn-block border-success mt-4">submit comment</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </form>
                        <div className="col-md-12 p-3 mb-5 border-bottom"></div>
                            <h4 className="text text-success p-3  border-bottom mb-3">Comments</h4>
                            {commentList}
                            <p className="p-3 my-3">
                                <span className="text text-success">{success}</span>
                                <span className="text text-danger">{err}</span>
                            </p>
                            
                            {userData.profiletype === "CAC" && appStatus === 0 ? <div>
                                    {caloader ? <Spinner /> : <button className="site-btn btn-success btn-block border-success mt-3" onClick={cacApproval}>
                                        Approve for Temporary License
                                    </button>}
                                    {dloader ? <Spinner /> : <button className="site-btn btn-danger btn-block border-danger mt-3" onClick={decline}>
                                        Decline Application
                                    </button>}
                                    
                                </div> : ""
                            }

                            {userData.profiletype === "DCG" && appStatus === 1 ? <div>
                                    {daloader ? <Spinner /> : <button className="site-btn btn-success btn-block border-success mt-3" onClick={dcgApproval}>
                                        Approve for License
                                    </button>}
                                    {dloader ? <Spinner /> : <button className="site-btn btn-danger btn-block border-danger mt-3" onClick={decline}>
                                        Decline Application
                                    </button>}
                                    
                                </div> : ""
                            }
                </div>
            </div>
        </div>
    )
}

export default withRouter(AssData);