import { useEffect, useState } from "react";
import { GIT_USER_INFO_API } from "../config/constant";

const useUserInfo = () => {
  const [gitUserData, setGitUserData] = useState([]);
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(GIT_USER_INFO_API);
      const jsonData = await response.json();
      setGitUserData(jsonData);
    };
    getUserInfo();
  }, []);

  return gitUserData;
};

export default useUserInfo;
