import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddForm41 = (props) => {

    const [entrytype, setEntrytype] = useState([]);

    const [formInfo, setFormInfo] = useState({
        iduser: props.info.userid,
        formref: "",
        cname: "",
        registeredaddress: props.info.location,
        descriptionofbusiness: props.info.descriptionofbusiness,
        purposeofbusiness: props.info.purposeofbusiness,
        status: "",
        comments: "",
        entrytypeid: "",
        building_estimate: "",
        plans_machinery: ""
    })

    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/entrytype/';

        axios.get(apiUrl)
          .then( res => {
                setEntrytype(res.data.items);
            })
          .catch( err => console.log(err))
    }, [])

    console.log(entrytype);


    const onChange = (e) => {

        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
        
    };


    const onSubmit = (e) => {
        e.preventDefault();

        console.log(formInfo);
    }


    return(
        <div>  
            <h3 className="text text-primary border-bottom py-2">Form 41</h3>
            <p><span className="text text-success"></span><span className="text text-danger"></span></p>
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
                            <select 
                                className="form-control"
                                name="status"
                                onChange={onChange}
                            >
                                <option value="">Select status</option>
                                <option value="1">ENABLED</option>
                                <option value="2">DISABLED</option>
                            </select>
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
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </form>
        </div>
    )
}

export default AddForm41;