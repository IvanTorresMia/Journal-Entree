import React, { useState, useEffect } from "react";
import ProfileSection from "../ProfileSection";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../../Utils/API";
import ProfileContext from "../../../Context/ProfileContext";
import CatagoryCards from "../CatagoryCards";
import CardContext from "../../../Context/CardContext";
import Modal from "../CatagoryCards/modal";


// Everything is going to happen here for profile

const Wrapper = () => {
  /*  --------------------- states ------------------- */
  const { user } = useAuth0();
  const [profileData, setProfileData] = useState({
    img: user.picture,
    name: "",
  });
  const [catagories, setCatagories] = useState([]);
  const [modal, setModal] = useState("display-con");
  const [cataoryInput, setCatagoryInput] = useState({
    name: "",
    description: "",
  });
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [refresh]);

  /*  --------------------- Getting user info ------------------- */
  const getUserInfo = () => {
    const email = user.email;
    console.log(email);
    API.getUser(email).then((res) => {
      console.log(res.data.id);
      setProfileData({ ...profileData, name: res.data.Profile.UserName });
      setCatagories(res.data.Catagories);
      setUserId(res.data.id);
    });
  };

  /*  --------------------- Functions for Catagories ------------------- */
  const handleCatagory = () => {
    setModal("");
  };

  const closeModal = () => {
    setModal("display-con");
  };

  const createCatagory = (name, description, id) => {
    API.createCatagory({ name: name, description: description, id: id }).then(
      (res) => {
        console.log(res);
      }
    );
  };

  const submitCatagory = (event) => {
    event.target.previousElementSibling.childNodes[1].value = "";
    event.target.previousElementSibling.previousElementSibling.childNodes[1].value =
      "";
    setModal("display-con");
    createCatagory(cataoryInput.name, cataoryInput.description, userId);
    getUserInfo();
    setRefresh(false);
    setCatagoryInput({ ...cataoryInput, name: "", description: "" });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setModal("display-con");
      createCatagory(cataoryInput.name, cataoryInput.description, userId);
      getUserInfo();
      setRefresh(false);
      setCatagoryInput({ ...cataoryInput, name: "", description: "" });
      console.log(event);

    }
    // } else if (event.key === "Escape") {
    //   setModal("display-con");
    //   console.log("hi");
    // }
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setCatagoryInput({ ...cataoryInput, name: value });
    console.log(cataoryInput);
  };
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setCatagoryInput({ ...cataoryInput, description: value });
    console.log(cataoryInput);
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
            <CatagoryCards handleCatagory={handleCatagory} />
          </CardContext.Provider>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        handleKeyPress={handleKeyPress}
        showOrHide={modal}
        submitCatagory={submitCatagory}
        nameChange={handleNameChange}
        descriptionChange={handleDescriptionChange}
      />
    </div>
  );
};

export default Wrapper;
