import React from "react";
import Images from "../../../Utils/loginImages.js";

const Header = ({ handleLogin }) => {
  return (
    <div className="jumbotron header-wraper">
      <div className="container">
        <div className="row">
          <div className="col img-wraper">
            <img
              className="header-img rounded"
              src={Images.img}
              alt="login journal"
            />
          </div>
          <div className="col">
            <h1>Welcome</h1>
            <p>
              Journaling has personaly impacted my life. So I decided to create
              a way for you to Journal your life.
            </p>

            <button onClick={handleLogin} className="btn btn1">Join Now</button>
            <button className="btn btn2">Who Built It?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
