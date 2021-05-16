import React, { useContext } from "react";
import ProfileContext from "../../../Context/ProfileContext";

const ProfileSection = () => {
  const context = useContext(ProfileContext);

  return (
    <div className="container">
      <div className="info-wraper rounded">
        <img src={context.img} alt="profile" />
        <h2>{context.name}</h2>
        <p>{context.tagLine}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
