import React from "react";
import Logo from '../../assets/images/Logo.png';
import { Link } from '@reach/router';
import { useForm } from 'react-hook-form';
import Footer from '../footer/footer';
import './contact.css';

const ContactSales = () => {
    const {handleSubmit, handleChange, register, reset,errors } = useForm([]);
    return(
        <div>
            <nav>
            <img src={Logo} alt="Oneburner-logo" className="nav-logo"/>
            <ul>
                <li>Product</li>
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
            <div className="body">
                <div className="contact-left">
                    <form onSubmit={handleSubmit()}className="contact-form">
                       <div className="name">
                       <div className="left-side">
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                       </div>
                       <div className="right-side">
                       <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleChange} ref={register({required: "Required"})} className="input"/> 
                       </div>
                       </div>
                        <label> Work Email</label>
                        <input type="text" name="email" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                        <label>Phone Number</label>
                        <input type="number" name="phoneNumber" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                        <label>Product of Interest</label>
                        <input type="text" name="product" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                        <div className="name">
                        <div className="left-side">
                        <label>Company Name</label>
                        <input type="text" name="companyName" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                        </div>
                        <div className="right-side">
                        <label>Company Size</label>
                        <input type="text" name="companySize" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                        </div>
                        </div>
                        <label>How can our expert help you?</label>
                        <textarea type="text" name="help" onChange={handleChange} ref={register({required: "Required"})} className="textarea"/>
                        <button className="contact-us"> Contact us </button>
                    </form> 
                </div>
                <div className="contact-right">
                    <h3>Request a call from an expert</h3>
                    <p>Having thoughts on what product works best for you? Fill the form and our expert will reach out to you</p>
                    <div className="offices">
                        <h3>Our Offices around Africa</h3>
                        <div className="row">
                        <div className="card">
                            <h6>NIGERIA</h6>
                            <p>33a Adeola Odeku, Victoria Island, Lagos</p>
                            <p>+234(0)-800000000</p>
                        </div>
                        <div className="card">
                            <h6>GHANA</h6>
                            <p>45, El-Senoussi street, Accra</p>
                            <p>+233(0)-277619819</p>
                        </div>
                        <div className="card">
                            <h6>SOUTH AFRICA</h6>
                            <p>47a Cheriton Drive, Port Shepstone, Kwazulu-Natal</p>
                            <p>+27(0)-857926978</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="card">
                            <h6>EGYPT</h6>
                            <p>72, Gameat, El-Dewal El-Arabia st., Gaza</p>
                            <p>+20(0)-35924259</p>
                        </div>
                        <div className="card">
                            <h6>KENYA</h6>
                            <p>41, Enterprise Road, Industrial Area, Nairobi</p>
                            <p>+254(0)-20536766</p>
                        </div>
                        <div className="card">
                            <h6>TUNISIA</h6>
                            <p>13, Rue de Makthar, Dhraa Governate Kasserine</p>
                            <p>+216(0)-77367410</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="card">
                            <h6>MALI</h6>
                            <p>22, Badalabougou Est., Bamako</p>
                            <p>+234(0)-78175387</p>
                        </div>
                        <div className="card">
                            <h6>TANZANIA</h6>
                            <p>Mbezi Beach, P.O.B: 70339, Dar Salaam</p>
                            <p>+255(0)-222120119</p>
                        </div>
                        <div className="card">
                            <h6>TOGO</h6>
                            <p>10, E rue de Echis, Lome</p>
                            <p>+228(0)-22229600</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactSales;