import { useContext } from "react";
import UserContext from "../utils/useContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex gap-3">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
    </>
  );
};

export default Footer;
