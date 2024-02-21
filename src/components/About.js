import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-body">
        <h1>About</h1>
        <h2>This is a React JS tutorial</h2>
        <User
          name={"Suman Bharati"}
          location={"Manchester, NH"}
          contact={"sumanbharati07@gmail.com"}
        />
        <User
          name={"Vikas Modi"}
          location={"Manchester, NH"}
          contact={"er.vikasmodi@gmail.com"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-body">
//       <h1>About</h1>
//       <h2>This is a React JS tutorial</h2>
//       <User
//         name={"Suman Bharati"}
//         location={"Manchester, NH"}
//         contact={"sumanbharati07@gmail.com"}
//       />
//     </div>
//   );
// };

export default About;
