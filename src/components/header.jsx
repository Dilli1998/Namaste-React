import foodVilla from "url:../assets/foodVilla.png";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/useContext";

const Header = () => {
  const { user } = useContext(UserContext);
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
      <div className="flex justify-between border-black px-0 py-1 mb-0 bg-black">
        <div className="w-20 h-fit">
          <a href="/">
            <img className="w-20 h-fit" src={foodVilla}></img>
          </a>
        </div>

        <ul className="flex">
          <li className="list-none p-2.5 pb-0 mt-2 h-fit text-white">
            <Link to="/" className="no-underline text-white p-0 m-0">
              Home
            </Link>
          </li>
          <li className="list-none p-2.5 pb-0 mt-2 h-fit text-white">
            <Link to="/about" className="no-underline text-white p-0 m-0">
              About Us
            </Link>
          </li>
          <li className="list-none p-2.5 pb-0 mt-2 h-fit text-white">
            <Link to="/contact" className="no-underline text-white p-0 m-0">
              Contact
            </Link>
          </li>

          <li className="list-none p-2.5 pb-0 mt-2 h-fit text-white">
            <Link to="/instamart" className="no-underline text-white p-0 m-0">
              Instamart
            </Link>
          </li>
        </ul>

        <div className="flex">
          <h3 className="text-white pt-4">
            {user.name} - {user.email}
          </h3>
          <Link
            to="/login"
            onClick={loginClick}
            className="login-btn no-underline text-[#cb9b58] p-2.5 pb-0 mt-2 h-fit"
          >
            {Online ? "✅" : "🚫"}
            {loginButton}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
