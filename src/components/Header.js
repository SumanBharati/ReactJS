import logo from '../../Assets/foodAppLogo.jpg';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex border-2 border-black bg-white">
      <div className="pl-2 bg-white">
        <img className="w-1/5 pl-3" src={logo} alt="food-app-logo" />
        <h2 className="m-0 bg-white font-customized text-orange-400 text-sm font-semibold">Yum Yum Express</h2>
      </div>
      <div className="nav-item ml-28">
        <ul className='flex bg-white text-[15px] list-none mt-2 pl-4'>
          <li className='p-[10px] m-2.5 bg-white'>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li className='p-2.5 m-2.5 bg-white'><Link className='link' to={"/"}>Home</Link></li>
          <li className='p-2.5 m-2.5 bg-white'><Link className='link' to={"/about"}>About</Link></li>
          <li className='p-2.5 m-2.5 bg-white'><Link className='link' to={"/contact"}>Contact Us</Link></li>
          <li className='p-2.5 m-2.5 bg-white'><Link className='link'>Cart</Link></li>
          <li className='p-2.5 m-2.5 bg-white'><Link className='link' to={"/grocery"}>Grocery</Link></li>
          {btnName === 'Logout' && <li className='p-2.5 m-2.5 bg-white'>{loggedInUser}</li>}
          <button
            onClick={() =>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className='px-4 m-2.5 bg-orange-400 rounded-md text-white'
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
