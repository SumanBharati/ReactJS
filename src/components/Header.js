import logo from '../../Assets/foodAppLogo.jpg';
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src={logo} alt="food-app-logo" />
        <h2 className="app-name">Yum Yum Express</h2>
      </div>
      <div className="nav-item">
        <ul>
          <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li><Link className='link' to={"/"}>Home</Link></li>
          <li><Link className='link' to={"/about"}>About</Link></li>
          <li><Link className='link' to={"/contact"}>Contact Us</Link></li>
          <li><Link className='link'>Cart</Link></li>
          <li><Link className='link' to={"/grocery"}>Grocery</Link></li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="btn-name"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
