import { useEffect } from "react";
import { useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const response = await fetch("https://api.github.com/users/dilli1998");
    const jsonData = await response.json();
    setUserInfo(jsonData);
  };
  const { login, avatar_url } = userInfo;
  return (
    <>
      <h1>{login}</h1>
      <img src={avatar_url}></img>
    </>
  );
};

export default Profile;
