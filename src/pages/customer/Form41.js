import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';
import AddForm41 from './AddForm41';

const Form41 = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [bizinfo, setBizinfo] = useState();

    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/userinfo/'+userData.userid;

        axios.get(apiUrl)
          .then( res => {
                setBizinfo(res.data.items[0]);
            })
          .catch( err => console.log(err))
    }, [userData.userid])

    let getForm41;

    if(bizinfo === undefined || bizinfo.length === 0 )
    {
        getForm41 = <div>
                        <Spinner />
                        <p className="text text-warning text-center my-3"><i className="fa fa-warning mr-3"></i>It looks like you have not provided your business detail! Click <Link to="/profile" className="text text-info">here</Link> to add your business detail before you can access the form</p>
                    </div>
    }
    else{
        getForm41 = <AddForm41 info={bizinfo} />
    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Form 41</h2>
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
                            <Link to="/myforms" className="btn btn-dark float-right"><i className="fa fa-plus"></i> My Forms</Link>
                        </div>
                    </div>
                    {getForm41}
                </div>
            </section>
        </div>  
    )
}

export default Form41;