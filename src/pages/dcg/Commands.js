import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner';


const Commands = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [commands, setCommands] = useState([]);

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/';

        axios.get(apiUrl)
          .then( res => {
                setCommands(res.data.items);
            })
          .catch( err => console.log(err))

    }, []);


    let commandlist;

    if(commands === undefined || commands.length === 0){
        commandlist = <Spinner />
    }
    else{
        commandlist = commands.map(item => (
            <tr key={item.commandid} >
                <td>{item.commandid}</td>
                <td>{item.commandname}</td>
                <td>{item.idzone}</td>
             </tr>
        ))
    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>Commands</h2>
                    <div className="site-beradcamb">
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>
            <section className="contact-page spad">
                <div className="container">
                <div className="row pb-3 mb-3">
                        <div className="col-md-12">
                            <Link to="/new-command" className="btn btn-dark float-right"><i className="fa fa-plus"></i> New Command</Link>
                        </div>
                    </div>
                    <table className="table table-stripped table-hover col-lg-12">
                        <thead>
                            <tr>
                                <td><strong>COMMAND ID</strong></td>
                                <td><strong>COMMAND NAME</strong></td>
                                <td><strong>COMMAND ZONE ID</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            {commandlist}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Commands;