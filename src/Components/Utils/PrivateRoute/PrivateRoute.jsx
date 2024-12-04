import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({ redirect = "/login" }) => {
  let {user} = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to={redirect} />;
};
export default PrivateRoute;
