import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../layout/Spinner';

const AddForm41 = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [entrytype, setEntrytype] = useState([]);
    const [category, setCategory] = useState([]);
    const [loader, setLoader] = useState(false);

    const [success, setSuccess] = useState("");
    const [err, setErr] = useState("");

    const [formInfo, setFormInfo] = useState({
        iduser: props.info.userid,
        formref: "",
        cname: "",
        registeredaddress: props.info.location,
        state: "",
        descriptionofbusiness: props.info.descriptionofbusiness,
        purposeofbusiness: props.info.purposeofbusiness,
        status: 0,
        comments: "",
        entrytypeid: "",
        building_estimate: "",
        plans_machinery: "",
        goods_description: "",
        expected_completion_date: "",
        formulae: "",
        brandnames: "",
        product_regnumber: "",
        product_category: "",
        product_description: "",
        selling_price: "",
        product_name: "",
        annual_production_estimate: "",
        plant_process_description: "",
        type_size_of_container: "",
        working_hours: "",
        packing_method: "",
        method_of_qa: "",
        method_of_control: "",
        storage_arrangement:"",
        method_of_marking: "",
        deliverystyle_and_tradertypes: "",
        commandid: userData.commandid
    });

    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/entrytype/';

        axios.get(apiUrl)
          .then( res => {
                setEntrytype(res.data.items);
            })
          .catch( err => console.log(err))

        const catUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/product/category/';

          axios.get(catUrl)
            .then( res => {
                  setCategory(res.data.items);
              })
            .catch( err => console.log(err))

    }, [])

    //console.log(entrytype);


    const onChange = (e) => {

        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
        
    };


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        console.log(formInfo);

        const formUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/';

        const fdata = new FormData();
        fdata.append('iduser', formInfo.iduser);
        fdata.append('formref', formInfo.formref);
        fdata.append('cname', formInfo.cname);
        fdata.append('registeredaddress', formInfo.registeredaddress+", "+formInfo.state);
        fdata.append('descriptionofbusiness', formInfo.descriptionofbusiness);
        fdata.append('purposeofbusiness', formInfo.purposeofbusiness);
        fdata.append('status', formInfo.status);
        fdata.append('comments', formInfo.comments);
        fdata.append('entrytypeid', formInfo.entrytypeid);
        fdata.append('building_estimate', formInfo.building_estimate);
        fdata.append('plans_machinery', formInfo.plans_machinery);
        fdata.append('goods_description', formInfo.goods_description);
        fdata.append('expected_completion_date', formInfo.expected_completion_date);
        fdata.append('formulae', formInfo.formulae);
        fdata.append('brandnames', formInfo.brandnames);
        fdata.append('product_regnumber', formInfo.product_regnumber);
        fdata.append('product_category', formInfo.product_category);
        fdata.append('product_description', formInfo.product_description);

        fdata.append('selling_price', formInfo.selling_price);
        fdata.append('product_name', formInfo.product_name);
        fdata.append('annual_production_estimate', formInfo.annual_production_estimate);
        fdata.append('plant_process_description', formInfo.plant_process_description);
        fdata.append('type_size_of_container', formInfo.type_size_of_container);
        fdata.append('working_hours', formInfo.working_hours);
        fdata.append('packing_method', formInfo.packing_method);
        fdata.append('method_of_qa', formInfo.method_of_qa);
        fdata.append('method_of_control', formInfo.method_of_control);
        fdata.append('storage_arrangement', formInfo.storage_arrangement);
        fdata.append('method_of_marking ', formInfo.method_of_marking );
        fdata.append('deliverystyle_and_tradertypes', formInfo.deliverystyle_and_tradertypes);
        fdata.append('commandid', formInfo.commandid);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        console.log(fdata);
        console.log(JSON.stringify(fdata))

        axios
            .post(formUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    setSuccess("Form 41 Successfully submitted!");
                    setLoader(false);
                }
                else{
                    setErr("Form 41 was not submitted successfully! Try again");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Form 41 was not submitted successfully! Try again");
                setLoader(false);
            });

    }


    return(
        <div>  
            <h4 className="text text-dark border-bottom py-2">Form 41</h4>
            <p><span className="text text-success">{success}</span><span className="text text-danger">{err}</span></p>
            <form className="contact-form ml-3" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input 
                                name="formref"
                                className="check-form" 
                                type="text" 
                                placeholder="Form Ref" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="cname"
                                className="check-form" 
                                type="text" 
                                placeholder="CNAME" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="registeredaddress"
                                className="check-form" 
                                type="text" 
                                placeholder="Registered Address" 
                                value={props.info.registeredaddress}
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <select
                                name="state"
                                className="form-control"
                                placeholder="Select state"
                                onChange={onChange}
                            >
                                <option value="">Select State</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="descriptionofbusiness"
                                className="check-form" 
                                type="text" 
                                placeholder="Description of Business" 
                                onChange={onChange}
                                value={props.info.descriptionofbusiness}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="purposeofbusiness"
                                className="check-form" 
                                type="text" 
                                placeholder="Purpose of Business" 
                                onChange={onChange}
                                value={props.info.purposeofbusiness}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="comments"
                                className="check-form" 
                                type="text" 
                                placeholder="Comments" 
                                onChange={onChange}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <select 
                                name="entrytypeid"
                                className="form-control border-0 pl-0"
                                onChange={onChange}
                            >
                                <option value="">Select Entry type</option>
                                { entrytype.map(ent => (
                                    <option key={ent.typeid} value={ent.typeid}>{ent.typename}</option>
                                ))}
                            </select>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="building_estimate"
                                className="check-form" 
                                type="text" 
                                placeholder="Building Estimate" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input 
                                name="plans_machinery"
                                className="check-form" 
                                type="text" 
                                placeholder="Plans Machinery" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="goods_description"
                                className="check-form" 
                                type="text" 
                                placeholder="Goods description" 
                                onChange={onChange}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        
                        <div className="form-group">
                            <input 
                                name="expected_completion_date"
                                className="check-form" 
                                type="date" 
                                placeholder="Expected completion date" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="formulae"
                                className="check-form" 
                                type="text" 
                                placeholder="Formulae" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="brandnames"
                                className="check-form" 
                                type="text" 
                                placeholder="Brand names" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="product_regnumber"
                                className="check-form" 
                                type="text" 
                                placeholder="Product Reg Number" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <select 
                                name="product_category"
                                className="form-control border-0 pl-0"
                                onChange={onChange}
                            >
                                <option value="">Select Product Category</option>
                                { category.map(pcat => (
                                    <option key={pcat.categoryid} value={pcat.categoryid}>{pcat.tariff_description}</option>
                                ))}
                            </select>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="product_description"
                                className="check-form" 
                                type="text" 
                                placeholder="Product description" 
                                onChange={onChange}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="selling_price"
                                className="check-form" 
                                type="number" 
                                placeholder="Selling Price" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="product_name"
                                className="check-form" 
                                type="text" 
                                placeholder="Product name" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                       
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input 
                                name="annual_production_estimate"
                                className="check-form" 
                                type="text" 
                                placeholder="Annual production estimate" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="plant_process_description"
                                className="check-form" 
                                type="text" 
                                placeholder="Plant process description" 
                                onChange={onChange}
                            >
                            </textarea>
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="type_size_of_container"
                                className="check-form" 
                                type="text" 
                                placeholder="Type size of container" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="working_hours"
                                className="check-form" 
                                type="text" 
                                placeholder="Working hours" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="packing_method"
                                className="check-form" 
                                type="text" 
                                placeholder="Packing method" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="method_of_qa"
                                className="check-form" 
                                type="text" 
                                placeholder="Method of QA" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="method_of_control"
                                className="check-form" 
                                type="text" 
                                placeholder="Method of control" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="storage_arrangement"
                                className="check-form" 
                                type="text" 
                                placeholder="Storage arrangement" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="method_of_marking"
                                className="check-form" 
                                type="text" 
                                placeholder="Method of marking" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        <div className="form-group">
                            <input 
                                name="deliverystyle_and_tradertypes"
                                className="check-form" 
                                type="text" 
                                placeholder="Delivery style and trader types" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                        {loader ? <Spinner /> :
                        <div className="col-md-12">
                            <button className="site-btn btn-success btn-block mt-4">Submit</button>
                        </div>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddForm41;