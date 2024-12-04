import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the token and email from the query params
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");

  useEffect(() => {
    if (token && email) {
      // Send token and email to backend to verify
      axios
        .get(`${BASE_URL}/api/user/verify-user/`, {
          params: { token, email },
        })
        .then((response) => {
          setStatus("Email verified successfully!");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error)
          setStatus("Invalid or expired token.");
          setLoading(false);
        });
    } else {
      setStatus("Invalid link.");
      setLoading(false);
    }
  }, [token, email]);

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      {loading ? (
        <p>Verifying...</p>
      ) : (
        <div>
          <p>{status}</p>
          <button onClick={handleRedirect}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
