import React from "react";
import Logo from '../../assets/images/Logo.png';
import World from '../../assets/images/world.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.png';
import YouTube from '../../assets/images/youtube.svg';
import './footer.css';

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footer-top">
            <img src={Logo} alt="Oneburner-logo" className="logo"/>
            <button className="english"><img src={World} alt="" className="world-logo"/>English</button>
            </div>
            <div className="footer-bottom">
            <div className="footer-left">
                <div className="footer-left-top">
                    <p>No 1 CRM solution in Africa</p>
                    <sub>Terms of use | Privacy Policy</sub>
                </div>
                <div className="footer-left-bottom">
                    <sub>Get in touch</sub>
                    <p>+234-80-000-0000</p>
                </div>
                <div className="icons">
                    <img src={Facebook} alt="facebook-icon" className="icon"/>
                    <img src={Twitter} alt="twitter-icon" className="icon"/>
                    <img src={LinkedIn} alt="linkedin-icon" className="icon"/>
                    <img src={YouTube} alt="youtube-icon" className="icon"/>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-1">
                    <h6>PRODUCT</h6>
                    <p>Features</p>
                    <p>Enterprise</p>
                    <p>Security</p>
                    <p>Trust</p>
                    <p>Customer Stories</p>
                    <p>Pricing</p>
                    <p>Integrations</p>
                    <p>Oneburner Partners</p>
                </div>
                <div className="footer-1">
                    <h6>COMPANY</h6>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>In the news</p>
                </div>
                <div className="footer-1">
                    <h6>ONEBURNER FOR TEAMS</h6>
                    <p>Engineering</p>
                    <p>Financial Services</p>
                    <p>CRM and Sales</p>
                    <p>IT</p>
                    <p>Marketing</p>
                    <p>Customer Support</p>
                    <p>Human resources</p>
                    <p>Project Manangement</p>
                    <p>Remote Work</p>
                </div>
                <div className="footer-1">
                    <h6>RESOURCES</h6>
                    <p>Community</p>
                    <p>Guides</p>
                    <p>Templates</p>
                    <p>Video Tutorials</p>
                    <p>Professional Services</p>
                    <p>Knowledge Base</p>
                    <p>Blogs</p>
                    <p>Webinars</p>
                    <p>Partners</p>
                </div>
            </div>
            </div>
            <hr />
            <div className="rights">
                <p>&#169; 2020 Oneburner.com. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;