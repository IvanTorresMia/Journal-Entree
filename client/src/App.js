import "./App.css";
import React from 'react';
import Login from './Pages/Login'
import { useAuth0 } from "@auth0/auth0-react";

const  App = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    !isAuthenticated && (
      <Login handleLogin={() => loginWithRedirect()}/>
    )
  );
}

export default App;
