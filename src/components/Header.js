import React, { useContext } from "react";
import LOGO from "../images/logo.svg";
import { Link } from "react-router-dom";
import { Search, BadgePercent, LifeBuoy, ShoppingBag } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // data from context
  const { loggedInUser } = useContext(UserContext);

  // selector hook to subscribe to cartSlice / store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header">
      {/* HEADER LOGO  */}
      <div className="logo-container flex flex-row justify-center items-center">
        <Link to="/">
          <img src={LOGO} alt="LOGO"></img>
        </Link>
        <Link to="/">
          <h2 className="text-orange-500 cursor-pointer -ml-6 font-sans font-extrabold text-xl">
            SWIGGY
          </h2>
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
          <Link to="/offers">
            <li className="flex items-center justify-center relative">
              <span className="p-2">
                <BadgePercent size={18} />
              </span>
              Offers
              <span className="absolute top-0 right-0 mt-1 mr-1 text-orange-500 text-xs -px-2 py-2 rounded-full">
                NEW
              </span>
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

          <Link to="/sign-in">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
              {loggedInUser ? loggedInUser : "Sign In"}
            </li>
          </Link>

          <Link to="/cart">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <ShoppingBag size={18} />
              </span>
              Cart ({cartItems.length})
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
