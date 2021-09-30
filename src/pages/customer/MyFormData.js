import React from 'react';
import { Link } from 'react-router-dom';

const MyFormData = (props) => {

    //const userData = JSON.parse(localStorage.getItem("userData"));

    const { formInfo } = props;

    console.log(props.formInfo[0]);



    return(
        <div className="row">
            <div className="col-md-12 pb-3 mb-3">
                <Link to="/myforms" className="btn btn-info float-right"><i className="fa fa-plus"></i> My Forms</Link>
            </div>
            <div className="col-md-6">
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
                    <div className="col-md-6">DESCRIPTIONOFBUSINESS</div>
                    <div className="col-md-6">{formInfo[0].DESCRIPTIONOFBUSINESS}</div>
                </div>
                <div className="row p-3 border-bottom">
                    <div className="col-md-6">PURPOSEOFBUSINESS</div>
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
                    <div className="col-md-6">{formInfo[0].EXPECTED_COMPLETION_DATE}</div>
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
                
            </div>
            <div className="col-md-6 border-left">
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
        </div>
    )
}

export default MyFormData;