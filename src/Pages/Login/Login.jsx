import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Components/Utils/Context/AuthContext";

const Login = () => {

  const currentLocation = useLocation()
  const navigateTo = useNavigate()

  const {loginUser,handleLoginData} = useContext(AuthContext)

  const source = new URLSearchParams(currentLocation.search).get("source");


  return (
    <section className="login__section">
      <div className="login__container">
        <div className="login__header">
          <h2>LOGO</h2>
          <p className="logo_text">Log In</p>
          <p>Welcome Back To Company</p>
        </div>
        <div className="login__form">
          <input
            onChange={handleLoginData}
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            onChange={handleLoginData}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Link>Forgot Password</Link>
          <Link onClick={loginUser} className="login__button" to="/checkout">
            Continue
          </Link>
          <p>
            Don't have an account? <Link to="/signin">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
