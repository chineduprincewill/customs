import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';
import SenderData from '../SenderData';

const AssData = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [loader, setLoader] = useState(false);

    const [getComments, setGetComments] = useState();

    const [comment, setComment] = useState({
        message: ""
    });

    const [err, setErr] = useState("");

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
    }, [formID])

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
                        {item.message_date}
                    </div>
                </div>
            </div>
        ))
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-6">
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
                        <div className="col-md-4">FORM ID</div>
                        <div className="col-md-8">
                            <Link to={`/form41-detail/${formID}`} className="btn btn-dark">
                                CLICK TO VIEW FORM
                            </Link>
                        </div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">MESSAGE</div>
                        <div className="col-md-8">{assInfo[0].MESSAGE}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">DATE ASSIGNED</div>
                        <div className="col-md-8">{assInfo[0].ASSIGNMENT_DATE}</div>
                    </div>
                    <div className="row p-3 border-bottom">
                        <div className="col-md-4">EXPIRY DATE</div>
                        <div className="col-md-8">{assInfo[0].EXPIRY_DATE}</div>
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
                </div>
            </div>
        </div>
    )
}

export default withRouter(AssData);