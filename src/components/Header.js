import React, { useState } from "react";
import LOGO from "../images/logo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { Search, BadgePercent, LifeBuoy, ShoppingBag } from "lucide-react";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  // state for login button text
  const [loginButton, setLoginButton] = useState(true);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      {/* HEADER LOGO  */}
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO} alt="LOGO"></img>
        </Link>
      </div>
      {/* NAV ITEMS */}
      <div className="nav-items">
        <ul>
          <Link to="/search">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <Search size={18} />
              </span>
              Search
            </li>
          </Link>
          <Link to="/about">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <BadgePercent size={18} />
              </span>
              Offers
            </li>
          </Link>
          <Link to="/help">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <LifeBuoy size={18} />
              </span>
              Help
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
              Sign in
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center justify-center">
              <span className="p=4">
                <ShoppingBag size={18} />
              </span>
              Cart
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
