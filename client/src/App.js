import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <Profile handleLogout={() => logout()} />
        ) : (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Login} />
            <Route exact path="/aboutUs" component={AboutUs} />
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;

// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from "react-router-dom";
