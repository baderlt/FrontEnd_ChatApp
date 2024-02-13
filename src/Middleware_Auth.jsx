import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthMiddleware = ({ isAuthenticated, children }) => {
    const navigate=useNavigate();
  if (!isAuthenticated) {
    // Redirect to a login page or another page when not authenticated
    return navigate("/login" );
  }

  // Render the wrapped components (routes) if authenticated
  return children;
};

export default AuthMiddleware;
