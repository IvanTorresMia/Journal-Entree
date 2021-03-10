import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";

const Profile = ({ handleLogout }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState({});

  if (isAuthenticated) {
    const email = JSON.stringify(user.email);
    console.log(email);
    API.createUser({ email: email }).then((res) => {
      console.log(res);
    });
  }

  const handleUserClick = () => {
    //   const email = user.email;
      API.getUser().then(res => {
          console.log(res)
      })
  };

  return (
    isAuthenticated && (
      <div className="container">
        <h1>Logout</h1>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <button onClick={handleUserClick}>Get Email</button>
        <br />
        {JSON.stringify(user, null, 6)}
        <br />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    )
  );
};

export default Profile;
