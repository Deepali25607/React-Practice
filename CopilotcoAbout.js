import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CopilotcoHeader from "./CopilotcoHeader"
import CopilotcoFooter from "./CopilotcoFooter"
import { Icon } from '@iconify/react';
import commentsIcon from '@iconify-icons/fa/comments';
class CopilotcoAbout extends Component {
    render() {
        return (
            <div>
                <CopilotcoHeader />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-data">
                                    <h3>Contact Our Team</h3>
                                    <p>Copilotco LLC is dedicated to providing the most professionally managed PCI/HIPAA/SOX compliant secure hosting and IT security management services available.</p>
                                    <p>Originally started as a general IT services consultancy in 2003 focused on Linux/Security/VOIP, Copilotco has evolved into its current form through the benefits of time and experience.</p>
                                    <p>Copilotco was founded by Tracy Reed and Rod Hamby who met at the regional Linux User Group in 2002, and together formed Copilotco with the mission of providing industry-leading secure hosting services to companies that need reliable and secure managed hosting.</p>
                                    <p>Since then they have traveled all over the world including Hong Kong, Vietnam, and Mexico delivering valuable technology services to their clients. Now, the Copilotco team focus on providing premium, professionally managed, secure server hosting for clients all over the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-dataabout">
                                <Icon icon={commentsIcon} /> <p>Have questions or need a problem solved? Call 866-MY-COPILOT (866-692-6745) or email us via the web form below prompt service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
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

export default CopilotcoAbout;