import foodLogo from "../../Assets/Food-logo.jpg";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src={foodLogo} alt="food-app-logo" />
        <h2 className="app-name">Tomato</h2>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
