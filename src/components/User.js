import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      btnName: "Increment count",
    };

    console.log(this.props.name + 'Constructor');
  }

  componentDidMount() {
    console.log(this.props.name + 'Component Did Mount');
  }

  render() {
    console.log(this.props.name + 'Render');
    const { name, location, contact } = this.props;

    const { count, btnName } = this.state;

    const handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <hr />
        <h4>Count: {count}</h4>
        <button onClick={handleClick}>{btnName}</button>
      </div>
    );
  }
}

export default User;
