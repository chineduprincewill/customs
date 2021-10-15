import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyForms = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [myformData, setMyFormData] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/user/'+userData.userid;

        axios.get(apiUrl)
          .then( res => {
                setMyFormData(res.data.items);
            })
          .catch( err => console.log(err))
    }, [userData.userid])

    let myformlist;

    if(myformData === undefined || myformData.length === 0 ){
        myformlist = <tr><td colSpan="6"><span className="text text-danger my-2">You have no form record yet! Click the New Form41 Button to add form information</span></td></tr>
    }
    else{
        myformlist = myformData.map(item => (
                <tr key={item.IDFORM} >
                <td>{item.IDFORM}</td>
                <td>{item.FORMREF}</td>
                <td>{item.CNAME}</td>
                <td>{item.COMMAND ? item.COMMAND[0].COMMANDNAME : "..."}</td>
                <td>{item.PRODUCTCATEGORY ? item.PRODUCTCATEGORY[0].TARIFF_DESCRIPTION : "..."}</td>
                <td><Link className="btn btn-link text-info" to={`myform-detail/${item.IDFORM}`}><i className="fa fa-search"></i></Link></td>
            </tr>
        ))
    }

    console.log(myformlist);

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>My Form 41 List</h2>
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
                            <Link to="/form" className="btn btn-dark float-right"><i className="fa fa-plus"></i> New form41</Link>
                        </div>
                    </div>
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
                            {myformlist}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default MyForms;