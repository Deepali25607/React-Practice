import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class CopilotcoFooter extends Component {
    render() {
        return (
            <div>
                 {/* <!--footer--> */}
                 <footer>
                    <section className="top-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contant-data">
                                        <p>24/7/365 SUPPORT | 866-MY-COPILOT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3><a href="#">Home</a></h3>
                                </div>
                                <div className="col-lg-3">
                                    <h3><a href="#">Compliant Hosting</a></h3>
                                    <ul>
                                        <li><a href="#">HIPAA Compliant Hosting</a></li>
                                        <li><a href="#">PCI Compliant Hosting</a></li>
                                        <li><a href="#">SOX Compliant Hosting</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h3><a href="#">Security & Support</a></h3>
                                    <ul>
                                        <li><a href="#">Enhanced Security for Proprietary Systems</a></li>
                                        <li><a href="#">Emergency Linux Help 24-7-365</a></li>
                                        <li><a href="#">Security Publications</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h3><a href="#">About</a></h3>
                                    <ul>
                                        <li><a href="#">Contact our Team</a></li>
                                        <li><a href="#">Datacenter</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="container-fluid container-copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="copyright">
                                            <p>© Copyright 2015 - Copilotco, Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </footer>

                <section className="go-top">
                    <div className="toparrow">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                </section>
            </div>


           
        );
    }
}

export default CopilotcoFooter;