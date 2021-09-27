import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {

    return (

        <footer className="footer-section">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-8 text-center text-lg-right">
                            <ul className="footer-nav">
                                <li><Link to="/">MLP</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">PrivLinkcy Policy </Link></li>
                                <li><Link to="/">official@xendbit.com</Link></li>
                                <li><Link to="/">+234 (0)802 5943549</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}