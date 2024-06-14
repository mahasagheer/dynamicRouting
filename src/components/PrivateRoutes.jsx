import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, admin } = useContext(AuthContext);
  {
    user ? children : <Navigate to="/" />;
  }
  {
    admin ? children : <Navigate to="/admin" />;
  }
};

export default PrivateRoutes;
