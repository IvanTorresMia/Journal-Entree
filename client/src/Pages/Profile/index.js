import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";

const Profile = ({ handleLogout }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    getCreateOrGet();
  }, []);

  // function checks if user exist in data base, if not then it creates one
  const getCreateOrGet = () => {
    API.getUser().then((res) => {
      const users = [];
      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i].email);
      }

      if (users.includes(JSON.stringify(user.email))) {
        setUserEmail(user.email);
        console.log(user.email + " is already created");
      } else {
        if (isAuthenticated) {
          const email = JSON.stringify(user.email);
          API.createUser({ email: email }).then((res) => {
            console.log(res);
          });
        }
      }
    });
  };

  return (
    isAuthenticated && (
      <div className="container">
        <h1>Logout</h1>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <br />
        {JSON.stringify(user, null, 6)}
        <br />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    )
  );
};

export default Profile;
