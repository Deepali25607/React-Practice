import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CopilotcoHeader from "./CopilotcoHeader"
import CopilotcoFooter from "./CopilotcoFooter"
// npm install --save-dev @iconify/react @iconify-icons/fa
import { Icon} from '@iconify/react';
import thList from '@iconify-icons/fa/th-list';

class CopilotcoHosting extends Component {
    render() {
        return (
            <div>
                <CopilotcoHeader />
                <section className="whychose">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="whychose-data hosting-dt">
                                    <h3>HIPAA Compliant Hosting</h3>
                                    <p>If you are a Covered Entity (CE) per HIPAA or a Business Associate (BA) per 45 CFR § 160.103 you must be HIPAA compliant. This requires the implementation of a HIPAA compliant security program.</p>
                                    <p>The law effectively says to “implement the necessary safeguards.” Copilotco can analyze your situation, perform a thorough risk assessment (required per HIPAA), and select the necessary safeguards to mitigate the risks identified by the assessment.</p>
                                    <p>We are guided by the actual standards that the US Department of Health and Human Services Office of Civil Rights (the government organization that handles HIPAA enforcement) audit against, ensuring compliance protection for your and best-in- className data protection for your customers and patients.</p>
                                    <p>Copilotco’s team of compliance experts use automated configuration management systems to deploy extensive security controls and ensure that as policies change, your servers remain fully compliant, protecting you and your customers alike. A HIPAA compliant security program is a complicated and detailed undertaking, Copilotco has all of the skills and resources necessary to help your company implement a HIPAA security program.</p>
                                    <a href="#">Contact us to discuss your HIPAA needs!</a>

                                    <p className="itelic">Always remember: Compliance is not an end in itself. The ultimate goal of compliance is protecting Patient Health Information (PHI) by�?not having a breach!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hosting-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div className="hosting-serve">
                                    <div className="hosting-icon">
                                    <Icon icon={thList} />
                                    </div>
                                    <div className="hosting-text">
                                        <h3>Guidance</h3>
                                        <p>Instant compliance with HIPAA, NIST SP-800-66, NIST SP-800-53, and other federal standards the government audits against.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div className="hosting-serve">
                                    <div className="hosting-icon">
                                    <Icon icon={thList} />
                                    </div>
                                    <div className="hosting-text">
                                        <h3>Security Controls</h3>
                                        <p>Controls developed straight from USGCB (US Government Configuration Baseline), NSA Hardening Guide, CIS benchmarks, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div className="hosting-serve">
                                    <div className="hosting-icon">
                                    <Icon icon={thList} />
                                    </div>
                                    <div className="hosting-text">
                                        <h3>Continuous Monitoring</h3>
                                        <p>Round-the-clock analysis of system logs and network traffic and system administrators available to you 24/7/365 means total peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div className="hosting-serve">
                                    <div className="hosting-icon">
                                    <Icon icon={thList} />
                                    </div>
                                    <div className="hosting-text">
                                        <h3>Breach Protection</h3>
                                        <p>Cutting-edge software and hardware, onsite security, and bulletproof glass are just some of the best-in-class protections all Copilotco customers receive.</p>
                                    </div>
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

export default CopilotcoHosting;