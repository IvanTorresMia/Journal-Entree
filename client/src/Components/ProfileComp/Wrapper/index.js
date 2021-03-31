import React, { useState, useEffect } from "react";
import ProfileSection from "../ProfileSection";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../../Utils/API";
import ProfileContext from "../../../Context/ProfileContext";
import CatagoryCards from "../CatagoryCards";
import GetProfile from "../GetProfile";

// Everything is going to happen here for profile

const Wrapper = () => {
  const { user } = useAuth0();
  const [profileData, setProfileData] = useState({
    img: user.picture,
    name: "",
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const email = user.email;
    console.log(email);
    API.getUser(email).then((res) => {
      console.log(res.data);
      setProfileData({ ...profileData, name: res.data.Profile.UserName });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProfileContext.Provider value={profileData}>
            <ProfileSection />
          </ProfileContext.Provider>
        </div>
        <div className="col">
          <CatagoryCards />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
