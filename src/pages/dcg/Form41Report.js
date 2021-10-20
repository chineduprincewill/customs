import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';


const Form41Report = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [formList, setFormList] = useState("");

    const [formStatus, setFormStatus] = useState({
        statusid : ""
    });


    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/';

        axios.get(apiUrl)
          .then( res => {
                setFormList(res.data.items);
            })
          .catch( err => console.log(err))

    }, [])

    const onChange = (e) => {
        setFormStatus({
            ...formStatus,
            [e.target.name] : e.target.value
        });

        console.log(formStatus);

    }


    const onSubmit = (e) => {
        e.preventDefault();

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/'+formStatus.statusid;

        axios.get(apiUrl)
          .then( res => {
                setFormList(res.data.items);
            })
          .catch( err => console.log(err))
    }


    let formListing;
    let listCount;

    if(formList === undefined || formList.length === 0){
        formListing = <Spinner />
    }
    else{
        listCount = formList.length;

        formListing = formList.map(item => (
            <tr key={item.IDFORM} >
                <td>{item.IDFORM}</td>
                <td>{item.FORMREF}</td>
                <td>{item.CNAME}</td>
                <td>{item.COMMAND ? item.COMMAND[0].COMMANDNAME : "..."}</td>
                <td>{item.PRODUCTCATEGORY ? item.PRODUCTCATEGORY[0].TARIFF_DESCRIPTION : "..."}</td>
                <td>
                    {item.STATUS === 0 && <span className="text text-warning">processing ...</span>}
                    {item.STATUS === 1 && <span className="text text-info">provisional license</span>}
                    {item.STATUS === 2 && <span className="text text-success">licensed</span>}
                    {item.STATUS === 3 && <span className="text text-danger">declined</span>}
                </td>
                <td>
                    <Link className="btn btn-link text-primary" to={`myform-detail/${item.IDFORM}`}><i className="fa fa-search"></i></Link>
                </td>
            </tr>
        ))
    }

    console.log(formList);

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Form 41 Report</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                    
                    <form onSubmit={onSubmit}>
                        <div className="row p-3 border-bottom">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <select 
                                        name="statusid"
                                        className="form-control border-0 pl-0"
                                        onChange={onChange}
                                    >
                                        <option value="">Filter by status</option>
                                        <option value="0">Processing</option>
                                        <option value="1">Issued Provisional License</option>
                                        <option value="2">Issued License</option>
                                        <option value="3">Declined</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <button className="btn btn-dark btn-sm btn-block" >filter</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                               <span className="text text-dark float-right mt-2"><strong>Total Count : {listCount}</strong></span>
                            </div>
                        </div>
                    </form>

                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td>FORM ID</td>
                                <td>FORM REF</td>
                                <td>COMPANY NAME</td>
                                <td>COMMAND</td>
                                <td>PRODUCT CATEGORY</td>
                                <td>STATUS</td>
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

export default Form41Report;