import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { isAdmin, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn === false || isAdmin === false) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export { ProtectedRoute };
