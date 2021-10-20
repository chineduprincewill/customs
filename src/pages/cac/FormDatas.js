import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layout/Spinner';

const FormDatas = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    

    const [loader, setLoader] = useState(false);

    const { formInfo } = props;

    const [err, setErr] = useState();

    const current = new Date();

    const [inspectionAcc, setInspectionAcc] = useState({
        trader_userid: "",
        assigning_userid: userData.userid,
        oco_userid: "",
        message: "",
        status: 1,
        assignment_date: `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`,
        expiry_date: ""

    })

    console.log(props.formInfo[0]);

    const [commandAcc, setCommandAcc] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/';

        axios.get(apiUrl)
          .then( res => {
                setCommandAcc(res.data.items);
            })
          .catch( err => console.log(err))
    }, [])

    console.log(commandAcc);

    const onChange = (e) => {

        setInspectionAcc({
            ...inspectionAcc,
            [e.target.name] : e.target.value
        })
        
    };


    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        if(formInfo[0].IDUSER){
            inspectionAcc.trader_userid = formInfo[0].IDUSER;
        }
        else{
            inspectionAcc.trader_userid = "";
        }

        const assUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/operations/allocate_oco/';

        const fdata = new FormData();
        fdata.append('trader_userid', inspectionAcc.trader_userid);
        fdata.append('assigning_userid', inspectionAcc.assigning_userid);
        fdata.append('oco_userid', inspectionAcc.oco_userid);
        fdata.append('message', formInfo[0].IDFORM+" : "+inspectionAcc.message);
        fdata.append('status', inspectionAcc.status);
       // fdata.append('phone', inspectionAcc.status);
        fdata.append('assignment_date', inspectionAcc.assignment_date);
        fdata.append('expiry_date', inspectionAcc.expiry_date);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        console.log(fdata);
        console.log(JSON.stringify(fdata))

        axios
            .post(assUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    props.history.push("/assignments");
                }
                else{
                    setErr("Assignment Unsuccessful! Contact Admin");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Assignment Unsuccessful! Contact Admin");
                setLoader(false);
            });

    }



    return(
        <div className="row">
             <div className="col-md-12">
                {userData.profiletype === "CAC" && <Link to="/form41-list" className="btn btn-primary mb-5 float-right"><i className="fa fa-arrow-right"></i> Forms List</Link>} 
                {userData.profiletype === "CAC" && <Link to={`/myform-detail/${formInfo[0].IDFORM}`} className="btn btn-dark mr-3 mb-5 float-right"><i className="fa fa-arrow-left"></i> Detail</Link>} 
            </div>
            <div className="col-md-7">
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">USER ID</div>
                    <div className="col-md-7">{formInfo[0].IDUSER ? formInfo[0].IDUSER : ""}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">COMPANY</div>
                    <div className="col-md-7">{formInfo[0].CNAME}</div>
                </div>
                <div className="row  p-3 border-bottom">
                    <div className="col-md-5">FORMREF</div>
                    <div className="col-md-7">{formInfo[0].FORMREF}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">REGISTERED ADDRESS</div>
                    <div className="col-md-7">{formInfo[0].REGISTEREDADDRESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">DESCRIPTION OF BUSINESS</div>
                    <div className="col-md-7">{formInfo[0].DESCRIPTIONOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PURPOSE OF BUSINESS</div>
                    <div className="col-md-7">{formInfo[0].PURPOSEOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">BUILDING ESTIMATE</div>
                    <div className="col-md-7">{formInfo[0].BUILDING_ESTIMATE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PLANS MACHINERY</div>
                    <div className="col-md-7">{formInfo[0].PLANS_MACHINERY}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">GOODS DESCRIPTION</div>
                    <div className="col-md-7">{formInfo[0].GOODS_DESCRIPTION}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">EXPECTED COMPLETION DATE</div>
                    <div className="col-md-7">{removeDateParts(formInfo[0].EXPECTED_COMPLETION_DATE)}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">BRAND NAMES</div>
                    <div className="col-md-7">{formInfo[0].BRANDNAMES}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PRODUCT REG NUMBER</div>
                    <div className="col-md-7">{formInfo[0].FORMULAE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PRODUCT CATEGORY</div>
                    <div className="col-md-7">{formInfo[0].PRODUCTCATEGORY ? formInfo[0].PRODUCTCATEGORY[0].TARIFF_DESCRIPTION : ""}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PRODUCT CATEGORY</div>
                    <div className="col-md-7">{formInfo[0].PRODUCT_REGNO}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PRODUCT DESCRIPTION</div>
                    <div className="col-md-7">{formInfo[0].PRODUCT_DESCRIPTION}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">SELLING UNIT PRICE</div>
                    <div className="col-md-7">{formInfo[0].SELLING_UNIT_PRICE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PRODUCT NAME</div>
                    <div className="col-md-7">{formInfo[0].PRODUCT_NAME}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">ANNUAL PRODUCTION ESTIMATE</div>
                    <div className="col-md-7">{formInfo[0].ANNUAL_PRODUCTION_ESTIMATE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PLANT PROCESS DESCRIPTION</div>
                    <div className="col-md-7">{formInfo[0].PLANT_PROCESS_DESCRIPTION}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">TYPE SIZE OF CONTAINER</div>
                    <div className="col-md-7">{formInfo[0].TYPE_SIZE_OF_CONTAINER}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">WORKING HOURS</div>
                    <div className="col-md-7">{formInfo[0].WORKING_HOURS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PACKING METHOD</div>
                    <div className="col-md-7">{formInfo[0].PACKING_METHOD}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">METHOD OF QA</div>
                    <div className="col-md-7">{formInfo[0].METHOD_OF_QA}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">METHOD OF CONTROL</div>
                    <div className="col-md-7">{formInfo[0].METHOD_OF_CONTROL}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">STORAGE ARRANGEMENT</div>
                    <div className="col-md-7">{formInfo[0].STORAGE_ARRANGEMENT}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">METHOD OF MARKING</div>
                    <div className="col-md-7">{formInfo[0].METHOD_OF_MARKING}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">DELIVERY STYLE AND TRADER TYPES</div>
                    <div className="col-md-7">{formInfo[0].DELIVERYSTYLE_AND_TRADERTYPES}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">COMMAND</div>
                    <div className="col-md-7">{formInfo[0].COMMAND ? formInfo[0].COMMAND[0].COMMANDNAME : ""}</div>
                </div>
            </div>
            <div className="col-md-5 border-left">
                {userData.profiletype === 'CAC' ? <form className="contact-form ml-3" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="mb-5 pb-3 text-success border-bottom">Inspection Assignment</h3>
                            <p className="text text-danger">{err}</p>
                            <div className="form-group">
                                <select 
                                    name="oco_userid"
                                    className="form-control border-0 pl-0"
                                    onChange={onChange}
                                >
                                    <option value="">SELECT OFFICER FOR INSPECTION</option>
                                    { commandAcc.map(cmd => (
                                        cmd.profiletype === "DCG" && <option key={cmd.userid} value={cmd.userid}>{cmd.firstname} {cmd.lastname} ( {cmd.profiletype} )</option>                                        
                                    ))}
                                    { commandAcc.map(cmd => (
                                        cmd.commandid === userData.commandid && <option key={cmd.userid} value={cmd.userid}>{cmd.firstname} {cmd.lastname} ( {cmd.profiletype} )</option>                                        
                                    ))}
                                </select>
                                <span><i className="ti-check"></i></span>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="message"
                                    className="form-control border-0 pl-0"
                                    onChange={onChange}
                                    placeholder="Message"
                                >
                                </textarea>
                                <span><i className="ti-check"></i></span>
                            </div>
                            <small className="col-md-12 pl-0">Select assignment expiry date</small>
                            <div className="form-group">
                                <input 
                                    type="date"
                                    name="expiry_date"
                                    className="form-control border-0 pl-0"
                                    onChange={onChange}
                                />
                                <span><i className="ti-check"></i></span>
                            </div>
                            {loader ? <Spinner /> :
                                <div className="col-md-12">
                                    <button className="site-btn btn-success btn-block mt-4">ASSIGN FOR INSPECTION</button>
                                </div>
                            }
                        </div>
                    </div>
                </form> : ""}
                
            </div>
        </div>
    )
}

export default withRouter(FormDatas);