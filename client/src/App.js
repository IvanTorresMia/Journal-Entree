import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <Profile handleLogout={() => logout()} />
      ) : (
        <Login handleLogin={() => loginWithRedirect()} />
      )}
    </div>
  );
};

export default App;
