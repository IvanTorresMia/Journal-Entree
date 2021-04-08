import React from "react";

const Nav = ({ handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container nav-wraper">
        <a className="navbar-brand" href="#">
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
              <a onClick={handleLogout} className="nav-link" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// Drop down incase I need it later
{
  /* <li className="nav-item dropdown">
<a
  className="nav-link dropdown-toggle"
  href="#"
  id="navbarDropdownMenuLink"
  role="button"
  data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="false"
>
  Dropdown link
</a>
<div
  className="dropdown-menu"
  aria-labelledby="navbarDropdownMenuLink"
>
  <a className="dropdown-item" href="#">
    Action
  </a>
  <a className="dropdown-item" href="#">
    Another action
  </a>
  <a onClick={handleLogout} className="dropdown-item" href="#">
   Login
  </a>
</div>
</li> */
}
