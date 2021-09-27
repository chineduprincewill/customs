import React from 'react';

const UserInfo = (props) => {

    //const {userInfo} = props.userinfo;

    return(
        <div className="ml-3">
            <h3 className="text text-primary border-bottom py-2">Business Detail</h3>
            <span className="text-success float-right"><i className="fa fa-edit"></i></span>
            <div className="row my-4 mt-3">
                <div className="col-md-5"><strong>COMPANY NAME</strong></div>
                <div className="col-md-7">{props.userinfo.companyname}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>DESCRIPTION</strong></div>
                <div className="col-md-7">{props.userinfo.descriptionofbusiness}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>PURPOSE</strong></div>
                <div className="col-md-7">{props.userinfo.purposeofbusiness}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>RC NUMBER</strong></div>
                <div className="col-md-7">{props.userinfo.rcnumber}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>TIN NUMBER</strong></div>
                <div className="col-md-7">{props.userinfo.tinnumber}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>LOCATION</strong></div>
                <div className="col-md-7">{props.userinfo.location}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>PHONE NUMBER</strong></div>
                <div className="col-md-7">{props.userinfo.phonenumber}</div>
            </div>
        </div>
    )
}

export default UserInfo;