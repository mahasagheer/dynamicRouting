import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ admin, children, user }) => {
  if (admin == true) {
    return children;
  }
  if (user == true) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoutes;
