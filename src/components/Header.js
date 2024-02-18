import foodLogo from '../../Assets/Food-logo.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src={foodLogo} alt="food-app-logo" />
        <h4 className="app-name">TOMATO</h4>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;