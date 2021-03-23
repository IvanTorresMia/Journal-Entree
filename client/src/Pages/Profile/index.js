import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";

const Profile = ({ handleLogout }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userEmail, setUserEmail] = useState();
  const [userId, setUserId] = useState([]);
  const [userName, setUserName] = useState()
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
        if (res.data[i].email === JSON.stringify(user.email)) {
          setUserId(res.data[i].id);
        }
      }

      if (users.includes(JSON.stringify(user.email))) {
        setUserEmail(user.email);
        console.log(user.email + " is already created");
      } else {
        if (isAuthenticated) {
          const email = JSON.stringify(user.email);
          API.createUser({ email: email }).then((res) => {
            // console.log(res);
          });
        }
      }
    });
  };

  const getUser = () => {
    const id = JSON.parse(userId);
    console.log(id);
    API.getUser({ id: id }).then((res) => {
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



  const submitProfile = (event) => {
    event.preventDefault();


  }


  const handleUserName = (event) => {
    const { value } = event.target;
    setUserName(value);
    console.log(entry.title);
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

        <button onClick={getUser}>Get User</button>

        <input onChange={handleTitle} placeholder="title" />
        <input onChange={handleText} placeholder="text" />
        <button onClick={submitEntry}>Submit Entry</button>
        <input onChange={handleUserName} placeholder="text" />
        <button onClick={submitProfile}>Submit Profile</button>
        <br />
        <br />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    )
  );
};

export default Profile;
