import React from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/Logo.png';
import Landing from '../../assets/images/landing-image.svg';
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
import Speed from'../../assets/images/speed.svg';
import Timeline from '../../assets/images/timeline.svg';
import Efficient from '../../assets/images/efficient.svg';
import Meeting from '../../assets/images/meeting.svg';
import Footer from '../footer/footer';
import Chat from '../../assets/images/chat.svg';
import Mail from '../../assets/images/mail.svg';
import Phone from '../../assets/images/phone.svg';
import Customer from '../../assets/images/customer.svg';
import Store from '../../assets/images/store.svg';
import Clients from '../../assets/images/clients.svg';
import Integrations from '../../assets/images/integrations.svg';
import Vector from '../../assets/images/Vector.svg';
import Down from '../../assets/images/down.svg'
import './home.css';

const Home = () => {
    const dropDown = () => {
        const product = document.getElementById("products");
            if(product.style.display === "flex"){
                product.style.display = "none";
            } else {
                product.style.display = "flex";
            }
        }
    return(
        <div>
            <nav>
            <Link to="/home" className="link"><img src={Logo} alt="Oneburner-logo" className="nav-logo"/></Link>
            <ul>
                <div className="down">
                   <li onClick={dropDown}>Product</li><img src={Down} alt="Oneburner-logo" className="down-icon"/>
                </div>
                <li>Pricing</li>
                <li><Link to="/enterprise" className="link">Enterprise</Link></li>
                <li>Support</li>
            </ul>
            <div className="nav-right">
                <p><Link to="/contact" className="link">Contact Sales</Link></p>
                <p>Login</p>
                <button className="try">Try for free</button>
            </div>
            </nav>
            <div className="products" id="products">
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
                <div className="main-left">
                    <h3 className="h3">Collaborate with your team and<br/> get more done</h3>
                    <p>Communicate effectively with Oneburner for easy<br/> collaboration, team work and remote work.</p>
                    <button className="free-trial"> Start Free trial</button>
                </div>
                <div className="image">
                <img src={Landing} alt="Landing Page image" className="landing"/>
                </div>
            </section>
            <section className="companies">
                <p>Over 500+ companies bond teams together using Oneburner</p>
                <div className="company-icons">
                    <img src={Paystack} alt="Paystack-logo" className="click-logo"/>
                    <img src={Egyptair} alt="Egyptair-logo" className="click-logo"/>
                    <img src={Dangote} alt="Dangote-logo" className="click-logo"/>
                    <img src={Standard} alt="Standard-bank-logo" className="click-logo"/>
                    <img src={Mtn} alt="Mtn-logo" className="click-logo"/>
                    <img src={Gtbank} alt="Gtbank-logo" className="click-logo"/>
                    <img src={Skooleo} alt="Skooleo-logo" className="click-logo"/>
                </div>
            </section>
            <section className="section">
            <div className="nav">
                <p>CRM & Sales</p>
                <p>Human resources</p>
                <p>Marketing</p>
                <p>Remote Work</p>
                <p>Project Management</p>
                <p>Social Media</p>
            </div>
            <div className="manage">
                <div className="manage-left">
                    <h4>Manage team activities<br/> all in one place</h4>
                    <p>Keep your team organized and informed with activities<br/> that are up to date.</p>
                </div>
                <div className="manage-right">
                    <img src={Meeting} alt="Oneburner-logo" className="square"/>
                </div>
            </div>
            </section>
            <section className="section">
                <div className="speed">
                    <div className="speed-left">
                    <img src={Speed} alt="Oneburner-logo" className="square"/>
                    </div>
                    <div className="speed-right">
                        <h4>Bring your team up to speed</h4>
                        <p>Collaborate on project from start to finish, see information at a<br/> glance, 
                            add comment, attachment and more with Oneburner.</p>
                    </div>
                </div>
                <div className="automated">
                    <div className="automated-left">
                        <h4>Automated task timeline</h4>
                        <p>View dates, projects, calendar, sprint and more with reliability.</p>
                    </div>
                    <div className="automated-right">
                        <img src={Timeline} alt="Oneburner-logo" className="square"/>
                    </div>
                </div>
                <div className="integrate">
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
            </div>
            <div className="row">
                    <div className="row-left">
                    <img src={Timeline} alt="Oneburner-logo" className="square"/>
                    </div>
                    <div className="row-right">
                        <h4>Timeless report generator</h4>
                        <p>You can generate quick report of activities of all that has to do<br/> 
                        with the daily running of your business and teams.</p>
                    </div>
                </div>
                <div className="row-reverse">
                    <div className="row-reverse-left">
                        <h4>Efficient Lead Management</h4>
                        <p>Track and manage prospective customers. Manage their notes, emails,<br/> 
                        meetings, calls, contacts, and files.</p>
                    </div>
                    <div className="row-revrse-right">
                        <img src={Efficient} alt="" className="square"/>
                    </div>
                </div>
                <div className="customer-support">
                    <div className="customer-icons">
                        <div className="support-icon">
                            <img src={Chat} alt="" className="logo"/>
                            <p>Live Chat</p>
                        </div>
                        <div className="support-icon">
                            <img src={Mail} alt="" className="logo"/>
                            <p>Mail support</p>
                        </div>
                        <div className="support-icon">
                            <img src={Phone} alt="A mobile phone" className="logo"/>
                            <p>Phone call support</p>
                        </div>
                    </div>
                    <div className="customer-image">
                        <img src={Customer} alt="Customer support officer" className="logo"/>
                    </div>
                    <div className="customer-text">
                        <h4>24/7 customer support</h4>
                        <p>Our team of responsible member is always available 
                        to help you all day long<br/> and ready to meet your demand. Reach out to us and we will always be there.</p>
                    </div>
                </div>
            </section>
            <section className="better-way">
                <h3 className="heading">Choose a better way to work</h3>
                <p>No credit card details | No additional installation | No time wasting</p>
                <button className="free-trial">Start your free trial</button>
            </section>
            <Footer />
        </div>
    )
}

export default Home;