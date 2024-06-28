import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children, roles }) => {
  const user = useSelector((state) => state.auth.user);
  const admin = useSelector((state) => state.auth.admin);
  if (admin == true && roles.includes("admin")) {
    return children;
  }
  if (user == true && roles.includes("user")) {
    return children;
  }
  return <Navigate to="/admin" />;
};

export default PrivateRoutes;
