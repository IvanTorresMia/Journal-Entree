import React from "react";

const Nav = ({ handleLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container nav-wraper">
        <a className="navbar-brand rounded" href="#">
            The Journal Entry
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               About Us
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleLogin} className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
