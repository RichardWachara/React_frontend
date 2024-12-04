import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Mpesa from '../../../assets/Mpesa..png'
import Paypal from '../../../assets/Paypal.webp'

const Footer = () => {
  return (
    <>
    <footer className="">
      <div className="footer-grid bg-width-nav">
      <div className="col">
      <Link id="logo">MWANGEARKE</Link>
      <h4>Contact</h4>
      <p><strong>Address:</strong> 45 Waiyaki Way, Street 24, Nairobi</p>
      <p><strong>Phone:</strong> +254799038217/ +254781268634</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <Link><TiSocialFacebook className="icons" /></Link>
          <Link><FaXTwitter className="icons" /></Link>
          <Link><FaInstagram className="icons" /></Link>
          <Link><FaWhatsapp className="icons" /></Link>
        </div>
      </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <Link>About Us</Link>
        <Link>Delivery Information</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms & Conditions</Link>
        <Link>Help</Link>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <Link>Sign In</Link>
        <Link>View Cart</Link>
        <Link>My Wishlist</Link>
        <Link>Track My Order</Link>
        <Link>Help</Link>
      </div>
      <div className="col_payment">
        <h4>We Accept</h4>
        <p>Secure Payment Gateways</p>
        <div className="row">
          <img src={Mpesa} alt="Mpesa Payment" />
          <img src={Paypal} alt="Paypal Payment" />
        </div>
      </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024, Ric_On_Tech - Ecommerce Specialist</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
