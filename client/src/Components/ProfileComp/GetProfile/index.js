import React from "react";

const GetProfile = ({ email, handlePrfileInput, handleProfileClick, handleTagLineChange }) => {
  return (
    <div className="jumbotron getProfile-wraper">
      <div className="container GetProfile-container">
        <h1>
          Welcome <span className="email">{email}</span> !
        </h1>
        <p>Before we start, What's your Name?</p>
        <input onChange={handlePrfileInput} placeholder="name" />
        <input onChange={handleTagLineChange} placeholder="tell us about you" />
        <button className="btn" onClick={handleProfileClick}>
          Begin Writing
        </button>
      </div>
    </div>
  );
};

export default GetProfile;
