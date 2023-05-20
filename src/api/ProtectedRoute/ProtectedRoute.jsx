import { Navigate, Outlet } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);
  const [loggedIn, setloggedIn] = useState(
    localStorage.getItem("jwt_token") ? true : false
  );
  const [admin, setAdmin] = useState(
    localStorage.getItem("is_admin") === true ? true : false
  );

  if (isLoggedIn === false || isAdmin === false) {
    console.log(loggedIn);
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export { ProtectedRoute };
