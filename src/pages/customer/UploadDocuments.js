import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import useFirestore from '../../hooks/useFirestore';

import Spinner from '../../layout/Spinner';


const UploadDocuments = (props) => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const { docs } = useFirestore(props.formid.toString());

    const [document, setDocument] = useState(null);

    const [selectedStatus, setSelectedStatus] = useState(false);

    const [documentTitle, setDocumentTitle] = useState();

   // const [uploadUrl, setUploadUrl] = useState(null);

    const [documentName, setDocumentName] = useState('Choose document');

    const [loader, setLoader] = useState(false);

    const onFileSelectChange = (e) => {

        let selected = e.target.files[0];

        if(selected){
            setDocument(selected);
        }
        
        console.log(document);
        setDocumentName(e.target.files[0].name);

        //onFileSelectChange(documentInfo.document.files[0].name);
    };


    const onChange = (e) => {

        setDocumentTitle({
            [e.target.name] : e.target.value
        });
        console.log(documentTitle);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);
        setSelectedStatus(true);

        //console.log(document);
        //console.log(documentTitle);

        //setDocumentName(null);
        //setDocumentTitle(null);
        //setDocument(null);

        //setLoader(false);

    }    

    return(
        <div>
            <h4 className="text text-success py-3 mb-5 border-bottom ml-3">Upload Documents</h4>

            {userData.profiletype === "CUSTOMER" && 
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
                                    <option value="Corporate Affairs Certificate">Corporate Affairs Certificate</option>
                                    <option value="Tax Clearance Certificate">Tax Clearance Certificate</option>
                                    <option value="State Approval">State Approval</option>
                                    <option value="Architectural Design">Architectural Design</option>
                                </select>
                                <span><i className="ti-check"></i></span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="custom-file">
                                <input 
                                    name="document"
                                    className="custom-file-input" 
                                    id="documentFile"
                                    type="file" 
                                    onChange={onFileSelectChange}
                                />
                                <label className="custom-file-label" htmlFor="documentFile">
                                    {documentName}
                                </label>
                            </div>
                        </div>
                        {loader ? <Spinner /> :
                        <div className="col-md-12">
                            <button className="site-btn btn-success border-success btn-block mt-4">upload document</button>
                        </div>
                        }
                    </div>
                </form>
            }

            {selectedStatus && <ProgressBar file={document} filename={documentTitle} formid={props.formid} setSelectedStatus={setSelectedStatus} setLoader={setLoader} />}
            
            <div className="row mt-3">
                {docs && docs.map(doc => (
                    <div className="col-md-5 m-3 border-primary p-3" style={{ backgroundColor: "#eeeeee" }} key={doc.id}>
                        <Link to={{ pathname: `${doc.url}`}} target="_blank" className="text text center">{doc.filename.title}</Link> 
                    </div>
                ))}

                {docs.length === 0 && <div className="alert alert-warning mx-4">No document uploaded yet!</div>}
        </div>
    </div>
    )
}

export default UploadDocuments; 