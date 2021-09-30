import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner';
import MyFormData from './MyFormData';

const MyformDetail = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const { id } = useParams();

    const [formDetail, setFormDetail] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/'+id;

        axios.get(apiUrl)
          .then( res => {
                setFormDetail(res.data.items);
            })
          .catch( err => console.log(err))
    }, [id])


    console.log(formDetail);

    let formInformation;

    if(formDetail === undefined || formDetail.length === 0 )
    {
        formInformation = <Spinner />
    }
    else{

        formInformation = <MyFormData formInfo = {formDetail} />

    }

    return(
        <div>
             <section className="page-info-section">
                <div className="container">
                    <h2>My Form 41 Detail</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    {formInformation}
                </div>
            </section>
        </div>
    )

}

export default MyformDetail;