import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [authToken, setauthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();
  const theLocation = useLocation();

  const sourcesearch = new URLSearchParams(theLocation.search).get("source");
  const sourceid = new URLSearchParams(theLocation.search).get("id");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const loginUser = async (event) => {
    event.preventDefault();
    let response = await fetch(
      `${BASE_URL}/api/user/token/obtain/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    if (response.status == 200) {
      let data = await response.json();
      setauthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      if (sourcesearch === "login") {
        navigate("/");
      } else if (sourcesearch === "buy") {
        navigate(`/checkout/?id=${sourceid}`);
      } else {
        navigate("/");
      }
    } else {
      alert("Something Went Wrong");
    }
  };

  const logOutUser = (e) => {
    e.preventDefault();
    setauthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logOutUser: logOutUser,
    handleLoginData: handleLoginData,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
