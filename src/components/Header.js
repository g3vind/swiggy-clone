import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
