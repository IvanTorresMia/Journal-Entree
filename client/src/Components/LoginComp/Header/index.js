import React from "react";
import Images from '../../../Utils/loginImages'

const Header = () => {
  return (
    <div className="jumbotron header-wraper">
      <div className="container">
        <div className="row">
          <div className="col">
              <img className="header-img rounded" src={Images.img} alt="login journal"/>
          </div>
          <div className="col">
              <h1>Welcome</h1>
              <p>Journaling can literally change your life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
