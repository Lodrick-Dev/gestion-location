import React from "react";
import { Navigate } from "react-router-dom";
import { Dynamic } from "../../context/DynamicContext";

const RoutePrivate = ({ children }) => {
  const { auth } = Dynamic();
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RoutePrivate;
