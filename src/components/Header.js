import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header = () => {
  // state for login button text
  const [loginButton, setLoginButton] = useState(true);
  // state for online/offline status
  const [status, setStatus] = useState(true);

  // useEffect for initial check and setting up event listeners
  useEffect(() => {
    // Function to update online status
    const updateOnlineStatus = () => {
      setStatus(navigator.onLine);
    };

    // Initial check
    updateOnlineStatus();

    // Set up event listeners for online/offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Clean up event listeners when the component is unmounted
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

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
          <li
            id="statusIndicator"
            className={status ? "text-green-500" : "text-red-500"}
          >
            {status ? "🟢 Online" : "🔴 Offline"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
