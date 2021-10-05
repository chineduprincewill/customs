import React, { useState } from 'react';

import Spinner from '../../layout/Spinner';


const UploadDocuments = (props) => {

    const [document, setDocument] = useState();

    const [loader, setLoader] = useState(false);
    const onChange = (e) => {

        setDocument({
            ...document,
            [e.target.name] : e.target.value
        })
        
    };


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        console.log(document);

        setLoader(false);


    }

    return(
        <div>
            <h4 className="text text-success py-3 mb-5 border-bottom ml-3">Upload Documents for {props.formid}</h4>

            <form className="contact-form ml-3" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <select 
                                name="title"
                                className="form-control" 
                                placeholder="Document title" 
                                onChange={onChange}
                            >
                                <option value="">Select document title</option>
                                <option value="CAC">CAC</option>
                                <option value="TCC">TCC</option>
                                <option value="State Approval">State Approval</option>
                                <option value="Architectural Design">Architectural Design</option>
                            </select>
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input 
                                name="document"
                                className="form-control" 
                                type="file" 
                                placeholder="upload document" 
                                onChange={onChange}
                            />
                            <span><i className="ti-check"></i></span>
                        </div>
                    </div>
                    {loader ? <Spinner /> :
                    <div className="col-md-12">
                        <button className="site-btn btn-success border-success btn-block mt-4">upload document</button>
                    </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default UploadDocuments;