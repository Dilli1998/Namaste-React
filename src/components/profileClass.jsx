import { Component } from "react";
import { GIT_USER_INFO_API } from "../config/constant";
class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const response = await fetch(GIT_USER_INFO_API);
    const jsonData = await response.json();
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    const { login, avatar_url } = userInfo;
    return (
      <>
        <h1>{login}</h1>
        <img src={avatar_url}></img>
      </>
    );
  }
}

export default ProfileClass;
