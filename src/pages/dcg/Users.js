import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import Spinner from '../../layout/Spinner';

const Users = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/';

        axios.get(apiUrl)
          .then( res => {
                setUsersList(res.data.items);
            })
          .catch( err => console.log(err))
    }, [])

    let users;

    if(usersList === undefined || usersList.length === 0){
        users = <Spinner />
    }
    else{
        users = usersList.map(item => (
            <tr key={item.userid} >
                <td>{item.userid}</td>
                <td>{item.firstname} {item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.profiletype}</td>
                <td>{item.isaccountverified === 0 ? <span className="text text-danger">not verified</span> : <span className="text text-success">verified</span>}</td>
                <td><Link className="btn btn-link text-info" to={`user-detail/${item.userid}`}><i className="fa fa-search"></i></Link></td>
            </tr>
        ))
    }

    console.log(usersList);

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>User Accounts</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <div className="row pb-3 mb-3">
                        <div className="col-md-12">
                            <Link to="/new-user" className="btn btn-dark float-right"><i className="fa fa-plus"></i> New User</Link>
                        </div>
                    </div>
                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>PROFILE TYPE</td>
                                <td>STATUS</td>
                                <td>...</td>
                            </tr>
                        </thead>
                        <tbody style={{ color:"#7d7c7c"}}>
                            {users}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Users);