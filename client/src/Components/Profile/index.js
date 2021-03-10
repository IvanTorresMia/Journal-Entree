import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API.js";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [ userData, setUserData ] = useState({})

  if (isAuthenticated) {
    const email = JSON.stringify(user.email);
    console.log(email);
    API.createUser({ email: email }).then((res) => {
      console.log(res);
      setUserData(res)
    });
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      
        <p>{userData}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    )
  );
};

export default Profile;
