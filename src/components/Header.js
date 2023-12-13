import { LOGO_URL } from "../utils/constants.js"

const Header = () => {
    return (
        <div className="header">
            {/* HEADER LOGO  */}
            <div className="logo-container">
                <img src={LOGO_URL} alt="LOGO"></img>
            </div>
            {/* NAV ITEMS */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;