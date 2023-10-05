import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const AuthRouteGuard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/" />;
};

export default AuthRouteGuard;

AuthRouteGuard.propTypes = {
  children: PropTypes.node,
};
