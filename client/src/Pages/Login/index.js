import React from "react";
import "./login.css";
import Nav from "../../Components/LoginComp/Nav";
import Header from "../../Components/LoginComp/Header";
import Reasons from "../../Components/LoginComp/Reasons";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Nav handleLogin={() => loginWithRedirect()} />
      <Header handleLogin={() => loginWithRedirect()} />
      <Reasons />
    </div>
  );
};

export default Login;
