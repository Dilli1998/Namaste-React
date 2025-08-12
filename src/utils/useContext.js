import { createContext } from "react";

const UserContext = createContext({
  name: "Dummyname",
  email: "Dummyemail",
});

export default UserContext;
