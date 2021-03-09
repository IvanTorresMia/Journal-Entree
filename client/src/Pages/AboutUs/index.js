import React from 'react';
import Nav from '../../Components/LoginComp/Nav'
import AboutMe from '../../Components/LoginComp/AboutMe'

const AboutUs = () => {

    return (
        <div>
            <Nav handleLogin={() => loginWithRedirect()} />
            <AboutMe />
        </div>
    )
}

export default AboutUs;