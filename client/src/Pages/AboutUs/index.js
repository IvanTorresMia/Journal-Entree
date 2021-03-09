import React from 'react';
import Nav from '../../Components/LoginComp/Nav'
import AboutMe from '../../Components/LoginComp/AboutMe'
import { useAuth0 } from "@auth0/auth0-react";

const AboutUs = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <Nav handleLogin={() => loginWithRedirect()} />
            <AboutMe />
        </div>
    )
}

export default AboutUs;