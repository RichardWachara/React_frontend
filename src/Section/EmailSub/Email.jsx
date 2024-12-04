import React from "react";
import "./Email.css";
import {Link} from 'react-router-dom'

const Email = () => {
  return <section className="email-section">
    <div className="email-content">
        <h4>Sign Up For Newsletter</h4>
        <p>Get Email updates about our latest shop and <span>special offers</span></p>
    </div>
    <div className="email-form">
        <input type="email" placeholder="Your Email Address"/>
        <Link>SignUp</Link>
    </div>
  </section>;
};

export default Email;
