import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner';

const Form41List = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [formList, setFormList] = useState([]);

    //const [loader, setLoader] = useState(false);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/';

        axios.get(apiUrl)
          .then( res => {
                setFormList(res.data.items);
            })
          .catch( err => console.log(err))
    }, []);


    let formListing;

    if(formList === undefined || formList.length === 0 || userData.profiletype !== 'CAC'){
        formListing = <Spinner />
    }
    else{
        formListing = formList.map(item => (
            <tr key={item.IDFORM} >
                <td>{item.IDFORM}</td>
                <td>{item.FORMREF}</td>
                <td>{item.CNAME}</td>
                <td></td>
                <td></td>
                <td><Link className="btn btn-link text-info" to={`user-detail/${item.IDFORM}`}><i className="fa fa-search"></i></Link></td>
            </tr>
        ))
    }

    console.log(formList);



    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Form 41 List</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td>FORM ID</td>
                                <td>FORM REF</td>
                                <td>COMPANY NAME</td>
                                <td>COMMAND</td>
                                <td>PRODUCT CATEGORY</td>
                                <td>...</td>
                            </tr>
                        </thead>
                        <tbody style={{ color:"#7d7c7c"}}>
                            {formListing}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )

}

export default Form41List;