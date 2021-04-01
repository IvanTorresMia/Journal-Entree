import React, { useState, useEffect } from "react";
import ProfileSection from "../ProfileSection";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../../Utils/API";
import ProfileContext from "../../../Context/ProfileContext";
import CatagoryCards from "../CatagoryCards";
import CardContext from "../../../Context/CardContext";

// Everything is going to happen here for profile

const Wrapper = () => {
  const { user } = useAuth0();
  const [profileData, setProfileData] = useState({
    img: user.picture,
    name: "",
  });
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

//   useEffect(() => {
//    setCatagoryData()
//   }, []);

  const getUserInfo = () => {
    const email = user.email;
    console.log(email);
    API.getUser(email).then((res) => {
        console.log(res)
      setProfileData({ ...profileData, name: res.data.Profile.UserName });
      setCatagories(res.data.Catagories)
      console.log(catagories)
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
     <CardContext.Provider value={catagories}>
     <CatagoryCards />
     </CardContext.Provider>
          
     
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
