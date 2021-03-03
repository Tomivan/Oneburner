import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png'
import { useForm } from 'react-hook-form';
import { Link, navigate } from '@reach/router';
import './login.css';

const LoginForm = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    const login = () => {
        navigate('/home');
        }

    return(
        <div>
            <div className="top">
            <img src={Logo} alt="Oneburner-logo" className="logo"/>
            <div className="right">
                <p>New Customer?</p><button className="try">Try for free</button>
            </div>
            </div>
            <div className="sign-in">
                <h2>Sign In</h2>
                <p>Welcome Back!</p>
            </div>
             <form onSubmit={handleSubmit(login)}className="login-form">
                <label>Email/Username</label>
                <input type="text" name="email" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <button className="login-button"> Login </button>
                <div className="password"> <Link to="/forgot-password" className="password-link">Forgot password?</Link></div>
            </form> 

            <footer className="footer">
                <p>&#169; 2020 Oneburner.com. All rights reserved</p>
            </footer>

        </div>
    )
}

export default LoginForm;