import { useEffect } from 'react';
import axios from 'axios';

const useLicense = (formid, approvedBy, status, comment, ExciseNumber) => {

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var expiry = new Date(),
    expiryDate = expiry.getFullYear() + '-12-31';

    useEffect(() => {
        
        const licenseUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/license/';

        const fdata = new FormData();
        fdata.append('idForm', formid);
        fdata.append('IssueDate', date);
        fdata.append('ExpiryDate', expiryDate);
        fdata.append('ApprovedBy', approvedBy);
        fdata.append('Status', status);
        fdata.append('Comments', comment);
        fdata.append('exciseNumber', ExciseNumber);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios
            .post(licenseUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    console.log(res.data.result);
                }
            })
            .catch(err => {
                console.log(err);
            });
    })
}

export default useLicense;