import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";

const Profile = ({ handleLogout }) => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    const email = JSON.stringify(user.email);
    console.log(email);
    API.createUser({ email: email }).then((res) => {
      console.log(res);
    });
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Logout</h1>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        {JSON.stringify(user, null, 2)}
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    )
  );
};

export default Profile;
