import React, { useState, useEffect } from "react";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/API";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

/* --------------------- Components -------------------*/
import Nav from "../../Components/ProfileComp/NavBar";
import GetProfile from "../../Components/ProfileComp/GetProfile";
import JournalWrapper from "../../Components/ProfileComp/EntryComponents/Wrapper";
import Wrapper from "../../Components/ProfileComp/Wrapper";

// function to handle log out.
const Profile = ({ handleLogout }) => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState({
    userName: "",
    tagLine: "",
  });
  const [gotUserName, setGotUserName] = useState(false);
  const [journaling, setJournaling] = useState(false);
  const [ids, setId] = useState(null);
  const [currentJournal, setCurrentJournal] = useState({
    title: "",
  });
  const [entry, setEntry] = useState({
    title: "",
    body: "",
    id: null,
  });
  const [entryList, setEntryList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    CreateOrGet();
  }, []);

  useEffect(() => {
    console.log(gotUserName);
  }, []);

  /* --------------------- Functions for User -------------------*/

  // function checks if user exist in data base, if not then it creates one
  const CreateOrGet = () => {
    API.getUsers().then((res) => {
      const users = [];
      // console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i].email);
      }
      if (!users.includes(user.email)) {
        const email = user.email;
        API.createUser({ email: email }).then((response) => {
          API.getUsers().then((secondRes) => {
            for (let j = 0; j < secondRes.data.length; j++) {
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
    getCatagoryInfo(email, currentValue);
    setJournaling(true);
    setGotUserName(false);
    console.log(journaling);
    console.log(gotUserName);
  };

  const getCatagoryInfo = (email, currentValue) => {
    API.getUser(email).then((res) => {
      API.getCatagory(currentValue, res.data.id).then((res) => {
        setCurrentJournal({ ...currentJournal, title: res.data.name });
        setEntry({ ...entry, id: res.data.id });
        getAllCatagories(res.data.id);
      });
    });
  };

  const handleTileChange = (event) => {
    const { value } = event.target;
    setEntry({ ...entry, title: value });
  };

  const handleBodyChange = (event) => {
    const { value } = event.target;

    setEntry({ ...entry, body: value });
  };

  const handleSaveClick = () => {
    console.log(entry.title);
    console.log(entry.body);
    const email = user.email;
    const currentValue = currentJournal.title;
    API.getUser(email).then((res) => {
      API.getCatagory(currentValue, res.data.id).then((res) => {
        API.getAllEntries(res.data.id).then((res) => {
          if (res.data.length === 0) {
            API.createEntry({
              title: entry.title,
              text: entry.body,
              id: entry.id,
            }).then((res) => {
              console.log(res);
              console.log(entryList);
            });
            getCatagoryInfo(user.email, currentJournal.title);
          } else {
            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].title == entry.title) {
                //we update
                let entryId = res.data[i].id;
                API.updateEntry(entryId, entry.title, entry.body).then(
                  (res) => {
                    console.log(res);
                  }
                );
                return;
              } else {
                API.createEntry({
                  title: entry.title,
                  text: entry.body,
                  id: entry.id,
                }).then((res) => {
                  console.log(res);
                  console.log(entryList);
                });

                getCatagoryInfo(user.email, currentJournal.title);
                return;
              }
            }
          }
        });
      });
    });
  };

  const getAllCatagories = (id) => {
    API.getAllEntries(id).then((res) => {
      // console.log(res.data);
      setEntryList(res.data);
    });
  };

  /* --------------------- functions for Prifile -------------------*/

  const submitProfile = (event) => {
    event.preventDefault();
    const userName = profile.userName;
    const tagLine = profile.tagLine;
    const id = ids;
    API.createProfile({ userName: userName, tagLine: tagLine, id: id }).then(
      (res) => {
        setGotUserName(true);
        console.log(res);
        createCatagory("Notes", "Main Notes here", id);
      }
    );
  };

  const handleUserName = (event) => {
    const { value } = event.target;
    setProfile({ ...profile, userName: value });
  };

  const handleTagLineChange = (event) => {
    const { value } = event.target;
    setProfile({ ...profile, tagLine: value });
  };

  return (
    <Router>
      <Nav handleLogout={handleLogout} />
      <div className="container profile-body">
        <Switch>
          <Route exact path="/">
            {!gotUserName ? (
              journaling ? (
                <Redirect to="/Journal" />
              ) : (
                <Redirect to="/getInfo" />
              )
            ) : (
              <Wrapper handleJournalClick={handleJournalClick} />
            )}
          </Route>
          <Route exact path="/getInfo">
            {gotUserName ? (
              <Redirect to="/" />
            ) : (
              <GetProfile
                email={user.email}
                handlePrfileInput={handleUserName}
                handleProfileClick={submitProfile}
                handleTagLineChange={handleTagLineChange}
              />
            )}
          </Route>
        </Switch>
        <Route exact path="/Journal">
          <JournalWrapper
            title={currentJournal.title}
            handleTileChange={handleTileChange}
            handleBodyChange={handleBodyChange}
            handleSaveClick={handleSaveClick}
            JournalEntries={entryList}
          />
        </Route>
      </div>
    </Router>
  );
};

export default Profile;
