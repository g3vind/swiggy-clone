import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

const Header = () => {
  // state for login button text
  const [loginButton, setLoginButton] = useState(true);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      {/* HEADER LOGO  */}
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} alt="LOGO"></img>
        </Link>
      </div>
      {/* NAV ITEMS */}
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link>
            <button
              className="login"
              onClick={() => {
                setLoginButton(!loginButton);
              }}
            >
              {loginButton ? "Login" : "Logout"}
            </button>
          </Link>
          <div className="ml-8">
            <li className="">
              Online Status:
              <span id="blinkingItem">{onlineStatus ? " 🟢" : " 🔴"}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
