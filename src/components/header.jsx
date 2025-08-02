import foodVilla from "url:../assets/foodVilla.png";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const loginClick = () => {
    loginButton === "Login"
      ? setLoginButton("LogOut")
      : setLoginButton("Login");
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img style={{ width: "100%" }} src={foodVilla}></img>
          </a>
        </div>

        <ul className="rightNav">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        <div className="rightNav">
          <Link to="/login" onClick={loginClick} className="login-btn">
            {loginButton}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
