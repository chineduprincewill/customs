import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import UserInfo from './UserInfo';
import AddUserinfo from './AddUserinfo';


const Profile = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [userInfo, setUserInfo] = useState([]);

    //const [loader, setLoader] = useState(false);

    const [commandName, setCommandName] = useState("");


    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/userinfo/'+userData.userid;

        axios.get(apiUrl)
          .then( res => {
                setUserInfo(res.data.items[0]);
            })
          .catch( err => console.log(err))


        const commandUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/'+userData.commandid;

        axios.get(commandUrl)
          .then( res => {
                setCommandName(res.data.commandname);
            })
          .catch( err => console.log(err))

    }, [userData.userid, userData.commandid]);


    //let buinessInfo;

    console.log(userInfo);

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Profile</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <div className="row" style={{ color:"#7d7c7c"}}>
                        <div className="col-md-6 border-right">
                            <h3 className="text text-primary border-bottom py-2">Profile Detail</h3>
                            <span className="text-success float-right"><i className="fa fa-edit"></i></span>
                            <div className="row my-4 mt-3">
                                <div className="col-md-5"><strong>YOUR ID</strong></div>
                                <div className="col-md-7">{userData.userid}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>NAME</strong></div>
                                <div className="col-md-7">{userData.firstname} {userData.lastname}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>EMAIL</strong></div>
                                <div className="col-md-7">{userData.email}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>MOBILE</strong></div>
                                <div className="col-md-7">{userData.phone}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>PROFILE TYPE</strong></div>
                                <div className="col-md-7">{userData.profiletype}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>COMMAND ID</strong></div>
                                <div className="col-md-7">{commandName}</div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-5"><strong>ACCOUNT VERIFIED</strong></div>
                                <div className="col-md-7">{userData.isaccountverified === 1 ? <span className="text text-success">YES</span> : <span className="text text-danger">NO</span>}</div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            {userInfo === undefined || userInfo.length === 0 ? <AddUserinfo id={userData.userid} /> : <UserInfo userinfo={userInfo} />}

                        </div>
                    </div>
                </div>
            </section>
        </div>  
    )
}

export default Profile;