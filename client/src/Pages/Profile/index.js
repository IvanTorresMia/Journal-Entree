import React, { useState, useEffect } from "react";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../../Components/ProfileComp/Wrapper";
import API from "../../Utils/API";
import { BrowserRouter as Route } from "react-router-dom";
import JournalWrapper from "../../Components/ProfileComp/EntryComponents/Wrapper";

/* --------------------- Components -------------------*/
import Nav from "../../Components/ProfileComp/NavBar";
import GetProfile from "../../Components/ProfileComp/GetProfile";

// function to handle log out.
const Profile = ({ handleLogout }) => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState({
    userName: "",
  });
  const [gotUserName, setGotUserName] = useState(false);
  const [journaling, setJournaling] = useState(false);
  const [ids, setId] = useState(null);
  const [currentJournal, setCurrentJournal] = useState({
    title: "",
  });

  useEffect(() => {
    CreateOrGet();
  }, []);

  /* --------------------- Functions for User -------------------*/

  // function checks if user exist in data base, if not then it creates one
  const CreateOrGet = () => {
    API.getUsers().then((res) => {
      const users = [];
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i].email);
      }
      if (!users.includes(user.email)) {
        const email = user.email;
        API.createUser({ email: email }).then((response) => {
          console.log(response);
          API.getUsers().then((secondRes) => {
            for (let j = 0; j < secondRes.data.length; j++) {
              console.log(secondRes.data[j].email);
              console.log(user.email);
              if (secondRes.data[j].email == user.email) {
                setId(secondRes.data[j].id);
              }
            }
          });
        });
      } else {
        setGotUserName(true);
      }
    });
  };

  const createCatagory = (name, description, id) => {
    API.createCatagory({ name: name, description: description, id: id }).then(
      (res) => {
        console.log(res);
      }
    );
  };

  /* --------------------- functions for entries -------------------*/

  const handleJournalClick = (event) => {
    const currentValue = event.target.previousElementSibling.innerHTML;
    const email = user.email;
    API.getUser(email).then((res) => {
      console.log(res.data.id);
      console.log(currentValue);

      API.getCatagory(currentValue, res.data.id).then((res) => {
        console.log(res.data.name);
        setCurrentJournal({ ...currentJournal, title: res.data.name });
        console.log(currentJournal.title);
        setJournaling(true);
      });
    });
  };

  /* --------------------- functions for Prifile -------------------*/

  const submitProfile = (event) => {
    event.preventDefault();
    const userName = profile.userName;
    const id = ids;
    console.log(id);
    API.createProfile({ userName: userName, id: id }).then((res) => {
      console.log(res);
      setGotUserName(true);
      createCatagory("Notes", "Main Notes here", id);
    });
  };

  const handleUserName = (event) => {
    const { value } = event.target;
    setProfile({ ...profile, userName: value });
  };

  return (
    <>
      <Nav handleLogout={handleLogout} />
      <div className="container profile-body">
        <Route exact path="/">
          {gotUserName ? (
            journaling ? (
              <JournalWrapper title={currentJournal.title} />
            ) : (
              <Wrapper handleJournalClick={handleJournalClick} />
            )
          ) : (
            <>
              <GetProfile
                email={user.email}
                handlePrfileInput={handleUserName}
                handleProfileClick={submitProfile}
              />
            </>
          )}
        </Route>
      </div>
    </>
  );
};

export default Profile;

// if got got username is true

{
  /* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <br />

        {JSON.stringify(user, null, 6)}
        <br /> */
}
