import useUserInfo from "../utils/useUserInfo";

const Profile = () => {
  const userInfo = useUserInfo();

  const { login, avatar_url } = userInfo;
  return (
    <>
      <h1>{login}</h1>
      <img src={avatar_url}></img>
    </>
  );
};

export default Profile;
