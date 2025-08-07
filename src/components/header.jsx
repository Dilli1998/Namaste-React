import foodVilla from "url:../assets/foodVilla.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const loginClick = () => {
    loginButton === "Login"
      ? setLoginButton("LogOut")
      : setLoginButton("Login");
  };

  const Online = useOnline();

  console.log(Online);
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

          <li>
            <Link to="/instamart" className="nav-link">
              Instamart
            </Link>
          </li>
        </ul>

        <div className="rightNav">
          <Link to="/login" onClick={loginClick} className="login-btn">
            {Online ? "✅" : "🚫"}
            {loginButton}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
