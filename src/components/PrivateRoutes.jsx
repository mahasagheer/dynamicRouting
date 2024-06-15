import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRoutes = ({ children, roles }) => {
  const { user, admin } = useContext(AuthContext);
  if (user == true && roles.includes("user")) {
    return children;
  }
  if (admin == true && roles.includes("admin")) {
    return children;
  } else {
    <Navigate to="/admin" />;
  }
};

export default PrivateRoutes;
