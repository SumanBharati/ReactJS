import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {
            name: '',
            location: ''
        }
    }

    console.log('Child Constructor');
  }

  async componentDidMount() {
    console.log('Child Component Did Mount');
    const data = await fetch("https://api.github.com/users/SumanBharati");

    const json = await data.json();

    console.log(json);
    this.setState({
        userInfo: json
    })
  }

  componentDidUpdate() {
    console.log('Child Component Did Update');
  }

  componentWillUnmount() {
    console.log('Child Component Will Unmount');
  }

  render() {
    console.log('Child Render');
    const { name, location, email } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {email}</h3>
      </div>
    );
  }
}

export default User;
