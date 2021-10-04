import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';
import AssData from './AssData';

const AllocDetail = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const { id } = useParams();

    const [alloc, setAlloc] = useState();


    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/operations/allocation/id/'+id;

        axios.get(apiUrl)
          .then( res => {
                setAlloc(res.data.items);
            })
          .catch( err => console.log(err))
    }, [id])

    console.log(alloc);

    let assInfo;

    if(alloc === undefined || alloc.length === 0 )
    {
        assInfo = <Spinner />
    }
    else{

        assInfo = <AssData assInfo = {alloc} />

    }


    return (
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Assignment Detail</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    {assInfo}
                </div>
            </section>
        </div>
    )
}

export default AllocDetail;