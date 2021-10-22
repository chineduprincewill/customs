import React from 'react';
import { Link } from 'react-router-dom';

const ShowLicenses = (props) => {

    let licenseList;


    const removeDateParts = (date) => {

        var str = date;
        var strArr = str.split("T");

        return strArr[0];
    }

    console.log(props.efn);

    let newList;

    if(props.efn === ""){

        newList = props.licenses;
    }
    else{
        
        newList = props.licenses.filter(licns => licns.EXCISE_NUMBER === props.efn);
    }

    licenseList = newList.map(item => (
        <tr key={item.IDLICENSE} >
            <td>{item.IDFORM}</td>
            <td>{item.IDLICENSE}</td>
            <td>{item.FORM41 ? item.FORM41[0].CNAME : "..."}</td>
            <td>{removeDateParts(item.ISSUEDATE)}</td>
            <td>{removeDateParts(item.EXPIRYDATE)}</td>
            <td>{item.APPROVEDBY}</td>
            <td>{item.EXCISE_NUMBER}</td>
            <td>
                {item.STATUS === 1 && <span className="text text-primary">Provisional License</span>}
                {item.STATUS === 2 && <span className="text text-success">License</span>}
            </td>
            <td>
                {item.STATUS === 1 && <Link className="btn btn-link text-primary" to={`pr-license/${item.IDFORM}`}><i className="fa fa-search"></i></Link>}
                {item.STATUS === 2 && <Link className="btn btn-link text-primary" to={`license/${item.IDFORM}`}><i className="fa fa-search"></i></Link>}
                
            </td>
        </tr>        
    ))
    

    return licenseList;

}

export default ShowLicenses;