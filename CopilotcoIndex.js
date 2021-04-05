import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';
import banner3 from './img/banner3.jpg';
import { Icon } from '@iconify/react';
import shieldIcon from '@iconify-icons/fa/shield';
import clockO from '@iconify-icons/fa/clock-o';
import groupIcon from '@iconify-icons/fa/group';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CopilotcoHeader from "./CopilotcoHeader";
import CopilotcoFooter from "./CopilotcoFooter";
class CopilotcoIndex extends Component {

    render() {
        const slideImages = [
            'img/banner1.jpg',
            'img/banner2.jpg',
            'img/banner3.jpg'
        ];
        return (
            <div>
             <CopilotcoHeader />
               
                {/* <!--slider--> */}
                <div>
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                <img src={banner1} alt="hosting" width="100%" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                <img src={banner2} alt="hosting" width="100%" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                <img src={banner3} alt="hosting" width="100%" />
                            </div>
                        </div>
                    </Slide>
                </div>
                {/*  <!--slider-bottom--> */}

                <div className="pt-50"></div>
                <section className="service-section">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="box-serv">
                                    <div className="icon-box">
                                        <Icon icon={shieldIcon} />
                                    </div>
                                    <div className="box-serv-cont">
                                        <h2>Compliance</h2>
                                        <p>Need to be compliant with security protocols ASAP? Copilotco will guide you through the complex web of security controls, required paperwork, and auditors.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box-serv">
                                    <div className="icon-box">
                                        <Icon icon={clockO} />
                                    </div>
                                    <div className="box-serv-cont">
                                        <h2>High Availability</h2>
                                        <p>24/7 availability means no interruption of business critical operations. We’ll help you ensure uptime through redundancy, failover, and zero single-point-of-failure.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box-serv">
                                    <div className="icon-box">
                                        <Icon icon={groupIcon} />
                                    </div>
                                    <div className="box-serv-cont">
                                        <h2>Premium Support</h2>
                                        <p>100% US-based support available around the clock. Our Linux, security, and compliance experts are here to answer questions and fix problems round the clock.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pt-50"></div>
                <section className="credit-or">
                    <div className="container">
                        <div className="">
                            <blockquote><p>You did a great job! It was really fast.</p>
                                <p>Our ISP’s support didn’t answer the phone but you did and you fixed it.</p>
                                <p>Thank you!</p></blockquote>
                            <div className="credit-orthor"><span className="author">Justin Boyd</span><span className="join"></span><span className="company">AAAWebDesigner.com</span></div>
                        </div>
                    </div>
                </section>
                <section className="whychose">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="whychose-data">
                                    <h3>Why Choose Copilotco</h3>
                                    <p>Copilotco’s expert team of system administrators and security analysts bring decades of experience and are truly dedicated to providing you the best secure managed service possible. Our customers rave about our responsiveness to their needs, our availability, our willingness to partner with them on solving problems, and our dedication to making their businesses successful.</p>
                                    <p>No other secure managed service offering can match what Copilotco offers in terms of designing and implementing specialized hosting and security programs to meet your specific needs. Copilotco’s unique security program starts by asking the right questions, from which everything else follows. Need a better solution?</p>
                                    <a href="#">Ask us what the right questions are!</a>
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
export default CopilotcoIndex;