import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRoutes = ({ children, roles }) => {
  const { user, admin } = useContext(AuthContext);
  if (admin == true && roles.includes("admin")) {
    return children;
  }
  if (user == true && roles.includes("user")) {
    return children;
  }
  return <Navigate to="/admin" />;
};

export default PrivateRoutes;
