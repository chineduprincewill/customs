import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../img/home-banner.png';

import Spinner from '../layout/Spinner';

class SignUps extends Component {

    constructor(props) {

            super(props);
            this.state = {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                phone: null,
                profileType: "CUSTOMER",
                commandId: null,
                commands: []
            };
            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }


        componentDidMount(){

            const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/config/command/';

            axios.get(apiUrl)
            .then( res => {
                this.setState({
                    commands: res.data.items
                });
            })
            .catch( err => console.log(err));
        }


        onChange(e){
            e.preventDefault();

            this.setState({
                [e.target.name] : e.target.value
            });
        }

        generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        };


        onSubmit(e){
            e.preventDefault();

            const userRand = this.generateRandomNumber(10000, 99999);
            const userId = `ET${userRand}`;
            console.log(userId);
            //const apiUrl = 'http://imotechconnect.com/api/v1/auth';

            const regData = {
                userId : userId,
                ...regInfo
            }

            console.log(regData);

            let $;

            const apiUrl = 'https://gpxdbpncn8rxww6-businessserv.adb.uk-london-1.oraclecloudapps.com/ords/nigeriacustom/system/users/';

            $.ajax ({
                type: 'POST',
                url: apiUrl,
                data: {
                    'userId' : userId,
                    'firstName' : regInfo.firstName,
                    'lastName' : regInfo.lastName,
                    'email' : regInfo.email,
                    'password' : regInfo.password,
                    'phone' : regInfo.phone,
                    'profileType' : regInfo.profileType,
                    'commandId' : regInfo.commandId
                },
                cache: false,
                success: function(data) { 
                    console.log('Reading to hit blockchain...');
                },
                error: function(xhr, status, err) {
                    console.log(xhr, status);
                }
            }); 
        }

    render(){

        return(
            <div>
                <section className="page-info-section">
                    <div className="container">
                        <h2>Apply</h2>
                        <div className="site-beradcamb">
                            <Link to="/">Home</Link>
                            <span><i className="fa fa-angle-right"></i>Excise Trader Sign Up</span>
                        </div>
                    </div>
                </section>
    
                <section className="contact-page spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <img src={homeImage} className="laptop-image" alt="" />
                            </div>
                            <div className="col-lg-6 border-left">
                                <p className="text text-danger" id="status"></p>
                                <form className="contact-form ml-3" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    name="firstName"
                                                    className="check-form" 
                                                    type="text" 
                                                    placeholder="First Name" 
                                                    onChange={onChange}
                                                />
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    name="lastName"
                                                    className="check-form" 
                                                    type="text" 
                                                    placeholder="Last Name"
                                                    onChange={onChange} 
                                                />
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    name="email"
                                                    className="check-form" 
                                                    type="text" 
                                                    placeholder="Email" 
                                                    onChange={onChange}
                                                />
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    name="password"
                                                    className="check-form" 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    onChange={onChange}
                                                />
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    name="phone"
                                                    className="check-form" 
                                                    type="text" 
                                                    placeholder="Phone" 
                                                    onChange={onChange}
                                                />
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select 
                                                    name="profileType"
                                                    className="form-control border-0 pl-0"
                                                    onChange={onChange}
                                                >
                                                    <option value="CUSTOMER">CUSTOMER</option>
                                                </select>
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select 
                                                    name="commandId"
                                                    className="form-control border-0 pl-0"
                                                    onChange={onChange}
                                                >
                                                    <option value="">Select Command</option>
                                                    { command.map(cmd => (
                                                        <option key={cmd.commandid} value={cmd.commandid}>{cmd.commandname}</option>
                                                    ))}
                                                </select>
                                                <span><i className="ti-check"></i></span>
                                            </div>
                                        </div>
                                        {loader ? <Spinner /> :
                                        <div className="col-md-12">
                                            <button className="site-btn btn-danger btn-block mt-4">Sign Up</button>
                                        </div>
                                        }
                                        <small className="ml-3 mt-3"><Link to="/sign-in">Already have an account yet? Click here to Sign in</Link></small>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUps;