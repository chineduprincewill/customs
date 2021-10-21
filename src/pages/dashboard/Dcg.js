import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dcg = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [zones, setZones] = useState([]);
    const [commands, setCommands] = useState([]);
    const [users, setUsers] = useState([]);
    const [applications, setApplications] = useState([]);
    const [provisionalLicense, setProvisionalLicense] = useState([]);
    const [license, setLicense] = useState([]);

    useEffect(() => {

        // fetch zones
        const zoneUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/zones/';

        axios.get(zoneUrl)
          .then( res => {
                setZones(res.data.items);
            })
          .catch( err => console.log(err))

          // fetch commands
          const commandUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/';

          axios.get(commandUrl)
            .then( res => {
                  setCommands(res.data.items);
              })
            .catch( err => console.log(err))

        // fetch users
        const userUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/';

        axios.get(userUrl)
        .then( res => {
                setUsers(res.data.items);
            })
        .catch( err => console.log(err))

        // fetch applications
        const applicationUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/operations/allocation/oco/'+userData.userid;

        axios.get(applicationUrl)
          .then( res => {
                setApplications(res.data.items);
            })
          .catch( err => console.log(err))

        // fetch provisional licenses count
        const prLicenceUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/1';

        axios.get(prLicenceUrl)
          .then( res => {
                setProvisionalLicense(res.data.items);
            })
          .catch( err => console.log(err))

          // fetch licenses count
        const licenseUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/form41/status/2';

        axios.get(licenseUrl)
          .then( res => {
                setLicense(res.data.items);
            })
          .catch( err => console.log(err))

    }, [userData.userid]);


    const removeDateParts = (dateToday) => {

        var str = dateToday;
        var strArr = str.split("T");

        return strArr[0];
    }


    let zoneCount;
    let commandCount;
    let userCount;
    let applicationCount;
    let pendingApproval = 0;
    let provisionalLicenseCount;
    let licenseCount;

    
    if(zones === undefined || zones.length === 0){
        zoneCount = "...";
    }
    else{
        zoneCount = zones.length;
    }

    if(commands === undefined || commands.length === 0){
        commandCount = "...";
    }
    else{
        commandCount = commands.length;
    }

    if(users === undefined || users.length === 0){
        userCount = "...";
    }
    else{
        userCount = users.length;
    }

    if(applications === undefined || applications.length === 0){
        applicationCount = "...";
    }
    else{
        applicationCount = applications.length;

        applications.map(item => {
           if(removeDateParts(item.ASSIGNMENT_DATE) === date){
                pendingApproval += 1;
           } 
           return pendingApproval;
        })
    }

    if(provisionalLicense === undefined || provisionalLicense.length === 0){
        provisionalLicenseCount = "...";
    }
    else{
        provisionalLicenseCount = provisionalLicense.length;
    }

    if(license === undefined || license.length === 0){
        licenseCount = "...";
    }
    else{
        licenseCount = license.length;
    }



    return(
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Zones</h5>
                                <h2 className="card-text text-dark mb-3"><i className="fa fa-home mr-3"></i>{zoneCount}</h2>
                                <Link to="/zones" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Commands</h5>
                                <h2 className="card-text text-dark mb-3"><i className="fa fa-university mr-3"></i>{commandCount}</h2>
                                <Link to="/commands" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-success">Users</h5>
                                <h2 className="card-text text-dark mb-3"><i className="fa fa-users mr-3"></i>{userCount}</h2>
                                <Link to="/users" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-success">Applications</h5>
                            <h2 className="card-text text-dark mb-3"><i className="fa fa-newspaper-o mr-3"></i>{applicationCount}</h2>
                            <Link to="/ins-assignments" className="btn btn-dark btn-block"><i className="fa fa-search"></i></Link>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-3 text-success">
                        <i style={{ fontSize : "250px" }} className="fa fa-signal"></i>
                    </div>
                    <div className="col-md-9">
                        <p className="mt-4"><span className="py-4 px-4 text-danger">There are <strong>{pendingApproval}</strong> form41 applications assigned to you today <strong>{date}</strong>.</span></p>
                        <p className="mt-4"><span className="py-4 px-4 text-primary"><strong>{provisionalLicenseCount} Provisional License(s)</strong> have been issued to Excise Traders.</span></p>
                        <p className="mt-4"><span className="py-4 px-4 text-success"><strong>{licenseCount} Licenses</strong> have been issued to Excise Traders.</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dcg;