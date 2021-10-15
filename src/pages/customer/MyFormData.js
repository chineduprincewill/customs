import React from 'react';
import { Link } from 'react-router-dom';

import UploadDocuments from './UploadDocuments';

const MyFormData = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const { formInfo } = props;

    console.log(props.formInfo[0]);

    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }

    return(
        <div className="row">
            <div className="col-md-12 pb-3 mb-3">
                {userData.profiletype === "CUSTOMER" && <Link to="/myforms" className="btn btn-dark float-right"><i className="fa fa-plus"></i> My Forms</Link>}
                {userData.profiletype === "CAC" && <Link to="/form41-list" className="btn btn-primary ml-3 float-right"><i className="fa fa-arrow-right"></i> Forms List</Link>} 
                {userData.profiletype === "CAC" && <Link to="/assignments" className="btn btn-success ml-3 float-right"> Assignments</Link>}
                {userData.profiletype === "CAC" && <Link to={`/form41-detail/${formInfo[0].IDFORM}`} className="btn btn-dark float-right"> Assign to officer</Link>}
                {userData.profiletype === "INSPECTOR" && <Link to="/ins-assignments" className="btn btn-dark float-right"> Assignments</Link>}
            </div>
            <div className="col-md-6">
            <div className="row p-3 border-bottom">
                    <div className="col-md-6 pt-3">APPLICATION STATUS</div>
                    <div className="col-md-6">
                        {formInfo[0].STATUS === 0 && <span className="site-btn btn-link border-white text-primary">Processing ...</span>}
                        {formInfo[0].STATUS === 1 && <Link to={`/pr-license/${formInfo[0].IDFORM}`} className="site-btn btn-info border-info">Provisional License</Link>}
                        {formInfo[0].STATUS === 2 && <Link to={`/license/${formInfo[0].IDFORM}`} className="site-btn btn-success border-success">Download License</Link>}
                        {formInfo[0].STATUS === 3 && <span className="site-btn btn-link border-white text-danger">Declined!</span>}
                    </div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">COMPANY</div>
                    <div className="col-md-6">{formInfo[0].CNAME}</div>
                </div>
                <div className="row  p-3 border-bottom">
                    <div className="col-md-6">FORMREF</div>
                    <div className="col-md-6">{formInfo[0].FORMREF}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">REGISTERED ADDRESS</div>
                    <div className="col-md-6">{formInfo[0].REGISTEREDADDRESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">DESCRIPTION OF BUSINESS</div>
                    <div className="col-md-6">{formInfo[0].DESCRIPTIONOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PURPOSE OF BUSINESS</div>
                    <div className="col-md-6">{formInfo[0].PURPOSEOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">BUILDING ESTIMATE</div>
                    <div className="col-md-6">{formInfo[0].BUILDING_ESTIMATE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PLANS MACHINERY</div>
                    <div className="col-md-6">{formInfo[0].PLANS_MACHINERY}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">GOODS DESCRIPTION</div>
                    <div className="col-md-6">{formInfo[0].GOODS_DESCRIPTION}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">EXPECTED COMPLETION DATE</div>
                    <div className="col-md-6">{removeDateParts(formInfo[0].EXPECTED_COMPLETION_DATE)}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">BRAND NAMES</div>
                    <div className="col-md-6">{formInfo[0].BRANDNAMES}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PRODUCT REG NUMBER</div>
                    <div className="col-md-6">{formInfo[0].FORMULAE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PRODUCT CATEGORY</div>
                    <div className="col-md-6">{formInfo[0].PRODUCTCATEGORY ? formInfo[0].PRODUCTCATEGORY[0].TARIFF_DESCRIPTION : ""}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PRODUCT CATEGORY</div>
                    <div className="col-md-6">{formInfo[0].PRODUCT_REGNO}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PRODUCT DESCRIPTION</div>
                    <div className="col-md-6">{formInfo[0].PRODUCT_DESCRIPTION}</div>
                </div>
                
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">SELLING UNIT PRICE</div>
                    <div className="col-md-6">{formInfo[0].SELLING_UNIT_PRICE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PRODUCT NAME</div>
                    <div className="col-md-6">{formInfo[0].PRODUCT_NAME}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">ANNUAL PRODUCTION ESTIMATE</div>
                    <div className="col-md-6">{formInfo[0].ANNUAL_PRODUCTION_ESTIMATE}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PLANT PROCESS DESCRIPTION</div>
                    <div className="col-md-6">{formInfo[0].PLANT_PROCESS_DESCRIPTION}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">TYPE SIZE OF CONTAINER</div>
                    <div className="col-md-6">{formInfo[0].TYPE_SIZE_OF_CONTAINER}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">WORKING HOURS</div>
                    <div className="col-md-6">{formInfo[0].WORKING_HOURS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PACKING METHOD</div>
                    <div className="col-md-6">{formInfo[0].PACKING_METHOD}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">METHOD OF QA</div>
                    <div className="col-md-6">{formInfo[0].METHOD_OF_QA}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">METHOD OF CONTROL</div>
                    <div className="col-md-6">{formInfo[0].METHOD_OF_CONTROL}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">STORAGE ARRANGEMENT</div>
                    <div className="col-md-6">{formInfo[0].STORAGE_ARRANGEMENT}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">METHOD OF MARKING</div>
                    <div className="col-md-6">{formInfo[0].METHOD_OF_MARKING}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">DELIVERY STYLE AND TRADER TYPES</div>
                    <div className="col-md-6">{formInfo[0].DELIVERYSTYLE_AND_TRADERTYPES}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">COMMAND</div>
                    <div className="col-md-6">{formInfo[0].COMMAND ? formInfo[0].COMMAND[0].COMMANDNAME : ""}</div>
                </div>
            </div>
            
            <div className="col-md-6 border-left">
                <UploadDocuments formid={formInfo[0].IDFORM} />
                
            {userData.profiletype === "CUSTOMER" && <div className="col-md-12 mt-3 border-top">
                    <p className="bg-dark text-white p-3">Ensure you have uploaded all the required documents as listed in the <strong>Select document title</strong> dropdown above to complete your form application and then click the button below to make your payment for the application. <br/><br/>Note : <strong>IF THE DOCUMENTS ARE NOT COMPLETE, YOUR APPLICATION WILL NOT BE APPROVED!</strong> </p>
                    <Link to="/pay" className="site-btn btn-success btn-block border-success mt-3">Pay for Form41 application</Link>
                </div>}
                
            </div>
        </div>
    )
}

export default MyFormData;