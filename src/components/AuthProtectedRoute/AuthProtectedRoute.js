import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthProtectedRoute = (props) => {
  const { isLoggedIn, children } = props;
  if (isLoggedIn) {
    return <Navigate to="/movies" replace />
  }
  return children ? children : <Outlet />;
}