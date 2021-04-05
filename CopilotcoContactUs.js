import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CopilotcoHeader from "./CopilotcoHeader";
import CopilotcoFooter from "./CopilotcoFooter";
class CopilotcoContactUs extends Component {
    render() {
        return (
            <div>
                <CopilotcoHeader />

                <section className="contact-us-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="heading-h2">Contact Us</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <div className="contantus-data">
                                    <h4>Email</h4>
                                    <a href="#">info@gmail.ccm</a>
                                    <h4>Help</h4>
                                    <p>+12124245467</p>
                                    <h4>Address</h4>
                                    <address>
                                        xyz
                        </address>

                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <div className="formabout">
                                    <form action="">
                                        <div className="form-group">
                                            <label for="name">Your Name (required)</label>
                                            <input type="text" className="form-control" placeholder="Enter email" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Your Email (required)</label>
                                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Subject</label>
                                            <input type="text" className="form-control" placeholder="Enter email" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="comment">Your Message</label>
                                            <textarea className="form-control" rows="5" id="comment"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success btnsubmit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CopilotcoFooter />
            </div>
        );
    }
}

export default CopilotcoContactUs;