import React, { Component } from 'react';
import './css/style.css';
import copilotco_logo from './img/copilotco_logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import feedIcon from '@iconify-icons/fa/feed';
import facebookIcon from '@iconify-icons/fa/facebook';
import twitterIcon from '@iconify-icons/fa/twitter';

class CopilotcoHeader extends Component {
    render() {
        return (
            
                        
            <div>

                <header>
                    <section className="top-bar">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <ul className="nav nav-topnum">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">866-MY-COPILOT &nbsp;|</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link pl-0" href="#">info@copilotco.com</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 nav d-flex social-links">
                                        <ul className="nav">

                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><Icon icon={feedIcon} /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><Icon icon={facebookIcon} /></a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><Icon icon={twitterIcon} /></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-header">

                        <nav className="navbar navbar-expand-md navbar-dark ">
                            {/* <!-- Brand --> */}
                            <a className="navbar-brand" href="#"><img src={copilotco_logo} /></a>

                            {/* <!-- Toggler/collapsibe Button --> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* <!-- Navbar links --> */}
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav ml-auto top-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                            Compliant Hosting
                  </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">HIPAA Compliant Hosting</a>
                                            <a className="dropdown-item" href="#">PCI Compliant Hosting</a>
                                            <a className="dropdown-item" href="#">SOX Compliant Hosting</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                            Security & Support
                  </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Enhanced Security & Managed Support</a>
                                            <a className="dropdown-item" href="#">Emergency Linux Help 24-7-365</a>
                                            <a className="dropdown-item" href="#">Security Publications</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                            About
                  </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Contact Our Team</a>
                                            <a className="dropdown-item" href="#">Datacenter</a>
                                            <a className="dropdown-item" href="#">Privacy Policy</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </section>
                </header>
            </div>
        );
    }
}

export default CopilotcoHeader;