import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";

  /* --------------------- Components -------------------*/
 import Nav from '../../Components/ProfileComp/NavBar'

  

const Profile = ({ handleLogout }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userEmail, setUserEmail] = useState();
  const [userId, setUserId] = useState([]);
  const [profile, setProfile] = useState({
    userName: "",
  });
  const [entry, setEntry] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    getCreateOrGet();
  }, []);

  /* --------------------- Functions for User -------------------*/

  // function checks if user exist in data base, if not then it creates one
  const getCreateOrGet = () => {
    API.getUsers().then((res) => {
      const users = [];
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i].email);
        if (res.data[i].email === user.email) {
          setUserId(res.data[i].id);
        }
      }

      if (users.includes(user.email)) {
        setUserEmail(user.email);
        console.log(user.email + " is already created");
      } else {
        if (isAuthenticated) {
          const email = user.email;
          API.createUser({ email: email }).then((res) => {
            console.log(res);
          });
        }
      }
    });
  };

  const getUser = (event) => {
    // event.preventDefault();
    const email = userEmail;
    console.log(email);
    API.getUser(email).then((res) => {
      console.log(res);
    });
  };

  /* --------------------- functions for entries -------------------*/
  const submitEntry = (event) => {
    event.preventDefault();

    const title = JSON.stringify(entry.title);
    const text = JSON.stringify(entry.text);
    const id = JSON.stringify(userId);

    console.log(title);
    console.log(text);
    console.log(id);

    API.createEntry({ title: title, text: text, id: id }).then((res) => {
      console.log(res);
    });
  };

  const handleTitle = (event) => {
    const { value } = event.target;
    setEntry({ ...entry, title: value });
    console.log(entry.title);
  };

  const handleText = (event) => {
    const { value } = event.target;
    setEntry({ ...entry, text: value });
    console.log(entry.text);
  };

  /* --------------------- functions for Prifile -------------------*/

  const submitProfile = (event) => {
    event.preventDefault();
    const userName = profile.userName;
    const id = userId;
    console.log("this is the user id" + id);
    API.createProfile({ userName: userName, id: id }).then((res) =>
      console.log(res)
    );
  };

  const handleUserName = (event) => {
    const { value } = event.target;
    setProfile({ ...profile, userName: value });
    console.log(entry.title);
  };






  return (
    isAuthenticated && (
      <div className="container">
       <Nav />

      </div>
    )
  );
};

export default Profile;



       {/* <h2>{user.name}</h2> */}
       
       
       
{/*        
        <h1>Logout</h1>


        <button onClick={getUser}>Get User</button>

        <input onChange={handleTitle} placeholder="title" />
        <input onChange={handleText} placeholder="text" />
        <button onClick={submitEntry}>Submit Entry</button>
        <input onChange={handleUserName} placeholder="text" />
        <button onClick={submitProfile}>Submit Profile</button>
        <br />
        <br />
        <button onClick={handleLogout}>LOGOUT</button>

        <br />
        <br /> */}


{/* things to out disposal */}
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <br />

        {JSON.stringify(user, null, 6)}
        <br /> */}