import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL

  const [isNextShowing, setisNextShowing] = useState(false);

  const showNext = () => {
    return isNextShowing ? "signin_nextshow" : "signin_nextnoshow";
  };

  const showNoNext = () => {
    return isNextShowing ? "signin_nextnoshow" : "signin_nextshow";
  };

  const location = useLocation(); // Access the current location
  const navigate = useNavigate(); // For navigation

  const source = new URLSearchParams(location.search).get("source");

  const [registrationData, setregistrationData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setregistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/register/`,
        registrationData
      );
      // console.log(response.data);
      if (source === "signin") {
        navigate("/");
      } else if (source === "buy") {
        navigate("/checkout");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      alert("Failed to register user. Check console for details.");
    }
    console.log("Registration Data Submited:", registrationData);
  };

  return (
    <section className="login__section">
      <div className={`login__container ${showNoNext()}`}>
        <div className="login__header">
          <h2>LOGO</h2>
          <p className="logo_text">Sign In</p>
          <p>
            Welcome to Bezel, the best place to buy or sell your next watch.
            Enter a few details to get started.
          </p>
        </div>
        <div className="login__form">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={registrationData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registrationData.password}
            onChange={handleChange}
          />
          <Link
            className="login__button"
            onClick={(e) => {
              e.preventDefault();
              setisNextShowing(true);
            }}
          >
            Continue
          </Link>
          <p>
            Don't have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
      <div className={`login__container ${showNext()}`}>
        <div className="login__header">
          <p className="logo_text">Welcome</p>
          <p>Please enter your personal details</p>
        </div>
        <div className="login__form">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={registrationData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Second Name"
            value={registrationData.last_name}
            onChange={handleChange}
          />
          <Link className="login__button" onClick={handleSignInSubmit}>
            Continue
          </Link>
          <p>
            Don't have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
