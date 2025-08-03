import { Component } from "react";
class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/dilli1998");
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
