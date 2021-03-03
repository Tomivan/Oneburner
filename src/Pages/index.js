import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Home from './Home/home';
import ContactSales from './contact/contact';
import Enterprise from './enterprise/enterprise';

const Pages = () => {
    return(
        <Router>
            <Login exact path="/" />
            <Home path="/home" />
            <ContactSales path="/contact" />
            <Enterprise path="/enterprise" />
        </Router>
    )
}
export default Pages;