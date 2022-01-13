import React from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/Logo.png';
import Financial from '../../assets/images/financial-report.svg';
import Group from '../../assets/images/Group.svg';
import Mark from '../../assets/images/mark.svg';
import Badge from '../../assets/images/badge.png';
import Africa from '../../assets/images/africa.svg';
import Ceo from '../../assets/images/Ellipse.svg';
import Paystack from '../../assets/images/paystack.svg';
import Egyptair from '../../assets/images/egyptair.svg';
import Dangote from '../../assets/images/dangote.svg';
import Standard from '../../assets/images/standardbank.svg';
import Mtn from '../../assets/images/mtn.svg';
import Gtbank from '../../assets/images/gtbank.svg';
import Skooleo from '../../assets/images/skooleo.svg';
import Slack from '../../assets/images/slack.svg';
import Gmail from '../../assets/images/gmail.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import Mailchimp from '../../assets/images/mailchimp.svg';
import Dropbox from '../../assets/images/dropbox.svg';
import Facebook from '../../assets/images/facebook-2.svg';
import OneNote from '../../assets/images/onenote.svg';
import FacebookMessanger from '../../assets/images/facebook-messenger.svg';
import Whatsapp from '../../assets/images/whatsapp.svg';
import Sendgrid from '../../assets/images/sendgrid.svg';
import Github from '../../assets/images/github.svg';
import Outlook from'../../assets/images/outlook.png';
import Box from '../../assets/images/box-39.png';
import Sharepoint from '../../assets/images/microsoft-sharepoint.svg';
import Teams from '../../assets/images/microsoft-teams.svg';
import Youtube from '../../assets/images/youtube-3.svg';
import Zeplin from '../../assets/images/zeplin.svg';
import Excel from '../../assets/images/excel-4.svg';
import Powerpoint from '../../assets/images/microsoft-powerpoint.svg';
import Access from '../../assets/images/microsoft-access.png';
import Wordpress from '../../assets/images/wordpress.svg';
import Store from '../../assets/images/store.svg';
import Clients from '../../assets/images/clients.svg';
import Integrations from '../../assets/images/integrations.svg';
import Vector from '../../assets/images/Vector.svg';
import Footer from '../footer/footer';
import './enterprise.css';

const Enterprise = () => {
    return(
        <div>
            <nav>
            <Link to="/home" className="link"><img src={Logo} alt="Oneburner-logo" className="nav-logo"/></Link>
            <ul>
                <li>Product</li>
                <li>Pricing</li>
                <li><Link to="/enterprise" className="link">Enterprise</Link></li>
                <li>Support</li>
            </ul>
            <div className="nav-right">
                <p><Link to="/contact" className="link">Contact Sales</Link></p>
                <p>Login</p>
                <button className="try-2">Try for free</button>
            </div>
            </nav>
            <div className="products">
                    <div className="product">
                        <div className="product-top">
                            <img src={Clients} alt="" className="product-logo"/>
                            <h6>Clients</h6>
                        </div>
                        <p>See the amazing team that uses<br/> Oneburner.</p>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <img src={Store} alt="" className="product-logo"/>
                            <h6>One burner stores</h6>
                        </div>
                        <p>Explore our ready made solutions to<br/> expand your business</p>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <img src={Integrations} alt="" className="product-logo"/>
                            <h6>Integrations</h6>
                        </div>
                        <p>Connect different solutions to oneburner<br/> and get more done.</p>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <img src={Vector} alt="" className="product-logo"/>
                            <h6>Why Oneburner</h6>
                        </div>
                        <p>Learn more about features,<br/> success rates, benefits and demo</p>
                    </div>
            </div>
            <section className="main">
                <img src={Financial} alt="" className="financial-logo"/>
                <div className="centre">
                    <h3 className="h3">Modern solution built for your<br/> enterprise growth</h3>
                    <p>Centralize your team in a secure, flexible and managed platform</p>
                    <button className="demo">Request a demo</button>
                </div>
                <img src={Group} alt="" className="report-logo"/>
            </section>
            <section className="companies">
                <p>Over 500+ companies bond teams together using Oneburner</p>
                <div className="company-icons">
                    <img src={Paystack} alt="Paystack-logo" className="company-logo"/>
                    <img src={Egyptair} alt="Egyptair-logo" className="company-logo"/>
                    <img src={Dangote} alt="Dangote-logo" className="company-logo"/>
                    <img src={Standard} alt="Standard-bank-logo" className="company-logo"/>
                    <img src={Mtn} alt="Mtn-logo" className="company-logo"/>
                    <img src={Gtbank} alt="Gtbank-logo" className="company-logo"/>
                    <img src={Skooleo} alt="Skooleo-logo" className="company-logo"/>
                </div>
            </section>
            <section className="enterprises">
            <h4>How Oneburner helps enterprises grow</h4>
               <div className="enterprise-inner">
                   <div className="enterprise-left">
                    <p>Oneburner software solution helps your business by creating an enabling environment for easy communication 
                    and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime 
                    SLA and Data security</p>
                   </div>
                    <div className="enterprise-right">
                        <div className="points">
                            <img src={Mark} alt="tick" className="logo"/>
                            <p>Data protection and control</p>
                        </div>
                        <div className="points">
                            <img src={Mark} alt="tick" className="logo"/>
                            <p>Reporting and analytics</p>
                        </div>
                        <div className="points">
                            <img src={Mark} alt="tick" className="logo"/>
                            <p>Use single sign-on and multi-factor authentication to secure accounts</p>
                        </div>
                        <div className="points">
                            <img src={Mark} alt="tick" className="logo"/>
                            <p>Enterprise integration with other tools</p>
                        </div>
                    </div>
               </div>
            </section>
            <div className="collaboration">
                <img src={Badge} alt="collaboration-badge" className="logo"/>
                <div className="best">
                    <h4>Best Collaboration Software</h4>
                    <p>Africa tech coaliton award</p>
                </div>
            </div>
            <section className="integrate">
                <h4>Integrate your favourite tools easily with one click</h4>
                <div className="tools">
                    <img src={Slack} alt="slack-logo" className="click-logo"/>
                    <img src={Gmail} alt="gmail-logo" className="click-logo"/>
                    <img src={LinkedIn} alt="linkedin-logo" className="click-logo"/>
                    <img src={Mailchimp} alt="mailchimp-logo" className="click-logo"/>
                    <img src={Dropbox} alt="Dropbox-logo" className="click-logo"/>
                    <img src={Facebook} alt="Facebook-logo" className="click-logo"/>
                    <img src={OneNote} alt="Onenote-logo" className="click-logo"/>
                    <img src={FacebookMessanger} alt="facebook-messanger-logo" className="click-logo"/>
                    <img src={Whatsapp} alt="Whatsapp-logo" className="click-logo"/>
                    <img src={Sendgrid} alt="Sendgrid-logo" className="click-logo"/>
                    <img src={Github} alt="Github-logo" className="click-logo"/>
                </div>
                <div className="tools">
                    <img src={Outlook} alt="Outlook-logo" className="click-logo"/>
                    <img src={Box} alt="Box-logo" className="click-logo"/>
                    <img src={OneNote} alt="Onenote-logo" className="click-logo"/>
                    <img src={Sharepoint} alt="microsoft-sharepoint-logo" className="click-logo"/>
                    <img src={Teams} alt="microsoft-teams-logo" className="click-logo"/>
                    <img src={Youtube} alt="Youtube-logo" className="click-logo"/>
                    <img src={Zeplin} alt="Zeplin-logo" className="click-logo"/>
                    <img src={Excel} alt="microsoft-excel-logo" className="click-logo"/>
                    <img src={Powerpoint} alt="microsoft-powerpoint-logo" className="click-logo"/>
                    <img src={Access} alt="microsoft-access-logo" className="click-logo"/>
                    <img src={Wordpress} alt="Wordpress-logo" className="click-logo"/>
                </div>
            </section>
            <section className="region">
                <h4>Our regional presence</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has<br /> been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                <img src={Africa} alt="The map of Africa" className="logo"/>
            </section>
            <section className="ceo-statement">
                <p>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot<br/> easier.
                 It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for<br/> your help and
                  is worth much more than we paid. We were treated like royalty.</p>
                  <div className="ceo">
                      <hr className="ceo-hr"/>
                      <div className="ceo-image">
                          <img src={Ceo} alt="The ceo" className="logo"/>
                          <div className="kemi">
                              <p>Kemi Hassan</p>
                              <p>Ceo, Sahaara Inc.</p>
                          </div>
                      </div>
                      <hr className="ceo-hr"/>
                  </div>
            </section>
            <section className="learn">
                <h3>want to learn more about how we can<br /> impact your enterprise?</h3>
                <button className="contact-sales">Contact Sales</button>
            </section>
            <Footer/> 
        </div>
    )
}

export default Enterprise;