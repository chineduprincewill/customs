import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Spinner from '../layout/Spinner';

const SenderData = (props) => {

    const [sender, setSender] = useState();

    useEffect(() => {
        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/user/'+props.userid;

        axios.get(apiUrl)
          .then( res => {
             setSender(res.data.items);
            })
          .catch( err => console.log(err))
    }, [props.userid])


    let senderDetail;

    if(sender === undefined || sender.length === 0){
        senderDetail = <Spinner />
    }
    else{
        senderDetail = sender.map(item => (
            <span  key={item.userid}>
                {item.firstname} {item.lastname} ({item.profiletype})
            </span>
        ))
    }


    return(
        <div>
            {senderDetail}
        </div>
    )


}

export default SenderData;