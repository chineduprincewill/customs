import React from 'react';

const UserInfo = (props) => {

    //const {userInfo} = props.userinfo;

    return(
        <div className="ml-3">
            <h4 className="text text-dark border-bottom py-2">Business Detail</h4>
            <span className="text-success float-right"></span>
            <div className="row my-4 mt-3">
                <div className="col-md-5"><strong>Company</strong></div>
                <div className="col-md-7">{props.userinfo.companyname}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>Description</strong></div>
                <div className="col-md-7">{props.userinfo.descriptionofbusiness}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>Purpose</strong></div>
                <div className="col-md-7">{props.userinfo.purposeofbusiness}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>RC Number</strong></div>
                <div className="col-md-7">{props.userinfo.rcnumber}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>TIN Number</strong></div>
                <div className="col-md-7">{props.userinfo.tinnumber}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>Location</strong></div>
                <div className="col-md-7">{props.userinfo.location}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>Phone Number</strong></div>
                <div className="col-md-7">{props.userinfo.phonenumber}</div>
            </div>
        </div>
    )
}

export default UserInfo;