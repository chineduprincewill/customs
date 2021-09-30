import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../layout/Spinner';

const FormData = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [inspectionAcc, setInspectionAcc] = useState({
        inspectionofficer: ""
    })

    const [loader, setLoader] = useState(false);

    const { formInfo } = props;

    console.log(props.formInfo[0]);

    const [commandAcc, setCommandAcc] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/command/'+userData.commandid;

        axios.get(apiUrl)
          .then( res => {
                setCommandAcc(res.data.items);
            })
          .catch( err => console.log(err))
    }, [userData.commandid])


    const onChange = (e) => {

        setInspectionAcc({
            ...inspectionAcc,
            [e.target.name] : e.target.value
        })
        
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);
    }



    return(
        <div className="row">
            <div className="col-md-7">
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
                    <div className="col-md-5">DESCRIPTIONOFBUSINESS</div>
                    <div className="col-md-7">{formInfo[0].DESCRIPTIONOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-5">PURPOSEOFBUSINESS</div>
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
                    <div className="col-md-7">{formInfo[0].EXPECTED_COMPLETION_DATE}</div>
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

                <form className="contact-form ml-3" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <select 
                                    name="inspectionofficer"
                                    className="form-control border-0 pl-0"
                                    onChange={onChange}
                                >
                                    <option value="">SELECT OFFICER FOR INSPECTION</option>
                                    { commandAcc.map(cmd => (
                                        <option key={cmd.userid} value={cmd.userid}>{cmd.firstname} {cmd.lastname} ( {cmd.profiletype} )</option>
                                    ))}
                                </select>
                                <span><i className="ti-check"></i></span>
                            </div>
                            {loader ? <Spinner /> :
                                <div className="col-md-12">
                                    <button className="site-btn btn-danger btn-block mt-4"><i className="fa fa-plus"></i></button>
                                </div>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormData;