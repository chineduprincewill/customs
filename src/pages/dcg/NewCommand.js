import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../../img/home-banner.png';

import Spinner from '../../layout/Spinner';

const NewCommand = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [command, setCommand] = useState({
        commandName: "",
        idZone: ""
    });

    const [zones, setZones] = useState([]);

    const [loader, setLoader] = useState(false);

    const [err, setErr] = useState("");

    useEffect(() => {

        const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/zones/';

        axios.get(apiUrl)
          .then( res => {
                setZones(res.data.items);
            })
          .catch( err => console.log(err))

    }, []);

    const onChange = (e) => {

        setCommand({
            ...command,
            [e.target.name] : e.target.value
        })
        
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setLoader(true);

        const regUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/';

        const fdata = new FormData();
        fdata.append('commandName', command.commandName);
        fdata.append('idZone', command.idZone);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };

        console.log(fdata);
        console.log(JSON.stringify(fdata))

        axios
            .post(regUrl, fdata, requestOptions)
            .then( res => {
                //console.log(res.data);
                if(res.data.result === 1)
                {
                    props.history.push("/commands");
                }
                else{
                    setErr("Command could not be added! Try again");
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log(err);
                setErr("Command could not be added! Try again");
                setLoader(false);
            });


    }

    return(
        <div>
            <section className="page-info-section">
                <div className="container">
                    <h2>New Zone</h2>
                    <div className="site-beradcamb">
                        <Link to="/"><i className="fa fa-dashboard"></i></Link>
                        <span><i className="fa fa-angle-right mx-3"></i>Welcome {`${userData.firstname} ${userData.lastname}`} !</span>
                    </div>
                </div>
            </section>

            <section className="contact-page spad">
                <div className="container">
                    <div className="row pb-3 mb-3">
                        <div className="col-md-12">
                            <Link to="/commands" className="btn btn-info float-right">Return to Commands</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <img src={homeImage} className="laptop-image" alt="" />
                        </div>
                        <div className="col-lg-6 border-left">
                            <p className="text text-danger">{err}</p>
                            <form className="contact-form ml-3" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                                name="commandName"
                                                className="check-form" 
                                                type="text" 
                                                placeholder="Command Name" 
                                                onChange={onChange}
                                            />
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select 
                                                name="idZone"
                                                className="form-control border-0 pl-0"
                                                onChange={onChange}
                                            >
                                                <option value="">Select Zone</option>
                                                { zones.map(cmd => (
                                                    <option key={cmd.idzone} value={cmd.idzone}>{cmd.zonename}</option>
                                                ))}
                                            </select>
                                            <span><i className="ti-check"></i></span>
                                        </div>
                                    </div>
                                    {loader ? <Spinner /> :
                                    <div className="col-md-12">
                                        <button className="site-btn btn-danger btn-block mt-4"><i className="fa fa-plus"></i></button>
                                    </div>
                                    }
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(NewCommand);