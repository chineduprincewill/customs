import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';

const UserDetail = () => {

    const { id } = useParams();

    const [user, setUser] = useState([]);

    const [userInfo, setUserInfo] = useState([]);

    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/user/'+id;

        axios.get(apiUrl)
          .then( res => {
                setUser(res.data.items);
            })
          .catch( err => console.log(err))


        const userInfoUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/userinfo/'+id;

        axios.get(userInfoUrl)
          .then( res => {
                setUserInfo(res.data.items);
            })
          .catch( err => console.log(err))

    }, [id]);

   // console.log(user);
    console.log(userInfo);

    let userdetail;
    let businessdetail;

    if(user === undefined || user.length === 0 )
    {
        userdetail = <Spinner />
    }
    else{
        userdetail =   
        <div className="col-md-6 border-right">
            <h3 className="text text-primary border-bottom py-2">Account Information</h3>
            <div className="row my-4 mt-3">
                <div className="col-md-5"><strong>YOUR ID</strong></div>
                <div className="col-md-7">{user[0].userid}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>NAME</strong></div>
                <div className="col-md-7">{user[0].firstname} {user[0].lastname}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>EMAIL</strong></div>
                <div className="col-md-7">{user[0].email}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>MOBILE</strong></div>
                <div className="col-md-7">{user[0].phone}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>PROFILE TYPE</strong></div>
                <div className="col-md-7">{user[0].profiletype}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>COMMAND ID</strong></div>
                <div className="col-md-7">{user[0].commandid}</div>
            </div>
            <div className="row my-4">
                <div className="col-md-5"><strong>ACCOUNT VERIFIED</strong></div>
                <div className="col-md-7">{user[0].isaccountverified === 1 ? <span className="text text-success">YES</span> : <span className="text text-danger">NO</span>}</div>
            </div>
        </div> 

    }

    if(userInfo === undefined || userInfo.length === 0)
    {
        businessdetail = <Spinner />
    }
    else{
        businessdetail = <div className="col-md-6 pl-5">
        <h3 className="text text-primary border-bottom py-2">Business Information</h3>
        <div className="row my-4 mt-3">
            <div className="col-md-5"><strong>COMPANY NAME</strong></div>
            <div className="col-md-7">{userInfo[0].companyname}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>DESCRIPTION</strong></div>
            <div className="col-md-7">{userInfo[0].descriptionofbusiness}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>PURPOSE</strong></div>
            <div className="col-md-7">{userInfo[0].purposeofbusiness}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>RC NUMBER</strong></div>
            <div className="col-md-7">{userInfo[0].rcnumber}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>TIN NUMBER</strong></div>
            <div className="col-md-7">{userInfo[0].tinnumber}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>LOCATION</strong></div>
            <div className="col-md-7">{userInfo[0].location}</div>
        </div>
        <div className="row my-4">
            <div className="col-md-5"><strong>PHONE NUMBER</strong></div>
            <div className="col-md-7">{userInfo[0].phonenumber}</div>
        </div>
    </div>
    }


    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>User Detail</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <div className="row pb-3 mb-3">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <Link to="/users" className="btn btn-info float-right">Return to Accounts</Link>
                        </div>
                    </div>
                    <div className="row" style={{ color:"#7d7c7c"}}>
                        {userdetail}{businessdetail}
                    </div> 
                </div>
            </section>
        </div>
        
    )
}

export default UserDetail;