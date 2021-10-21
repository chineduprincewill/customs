import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormStatus = (props) => {

    const [fmstatus, setFmstatus] = useState();

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/'+props.id;

        axios.get(apiUrl)
          .then( res => {
                setFmstatus(res.data.items[0].STATUS);
            })
          .catch( err => console.log(err))
    }, [props.id]);

    console.log(fmstatus);

    let formstatus;

    if(fmstatus === undefined || fmstatus.length === 0){
        formstatus = <span className="text text-warning">form status loading ...</span>
    }
    else{
        formstatus = <span>
            {fmstatus === 0 && <span className="text text-warning">processing ...</span>}
            {fmstatus === 1 && <span className="text text-primary">Provisional License</span>}
            {fmstatus === 2 && <span className="text text-success">Licensed!</span>}
            {fmstatus === 3 && <span className="text text-danger">declined!</span>}
        </span>
    }

    return(
        <div>
            {formstatus}
        </div>
    )

}

export default FormStatus;