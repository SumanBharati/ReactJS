import React from "react";
import ReactDOM from "react-dom/client";
import foodLogo from "./Assets/Food-logo.jpg";
import indianSpiceImg from "./Assets/IndianSpice.jpg";

/*
* Header
    - Logo
    - Nav Items
        - Home
        - About
        - Contact Us
        - Cart
* Body
    - Search Bar
    - Restaurant Container
        - Restaurant Card
            - Food Image
            - Name of Restaurant
            - Star rating
            - Cuisine
            - Deivery Time
* Footer
    - Copyright
    - Links
    - Address
    - Contact detail
*/

const restaurantList = [
  {
    info: {
      id: "733836",
      name: "Pearl Multicuisine Restaurant",
      cloudinaryImageId: "1e9ecf71dc7d9eefbed2a7b0627b6e8f",
      costForTwo: "100000",
      cuisines: ["North Indian", "Indian"],
      avgRatingString: "--",
      deliveryTime: 40,
    },
  },
  {
    info: {
      id: "797433",
      name: "C.C.E (Curry Chop Express)",
      cloudinaryImageId: "5195888c8b56345d492a23b48af124d2",
      costForTwo: "20000",
      cuisines: ["Chinese", "Beverages", "Indian", "Snacks"],
      avgRating: 3.9,
      deliveryTime: 46,
    },
  },
  {
    info: {
      id: "84545",
      name: "Masala Darbar - Lashkar",
      cloudinaryImageId: "7220690ce86e1e76728fff20e295d462",
      costForTwo: "25000",
      cuisines: ["North Indian", "Chinese", "Snacks"],
      avgRating: 4.2,
      deliveryTime: 37,
    },
  },
  {
    info: {
      id: "91828",
      name: "Taste of Punjab",
      cloudinaryImageId: "qpnb6dlmdt2awtqlw3ef",
      costForTwo: "22500",
      cuisines: ["North Indian", "Fast Food"],
      avgRating: 4.1,
      deliveryTime: 34,
    },
  },
  {
    info: {
      id: "553835",
      name: "Biryani By Kilo",
      cloudinaryImageId: "bf9be1c6b9d796850f426281559cb2d2",
      costForTwo: "49900",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.3,
      deliveryTime: 60,
    },
  },
  {
    info: {
      id: "256741",
      name: "Masala Darbar",
      cloudinaryImageId: "91e024fa79f1e6e5d11c702f8e8721c5",
      costForTwo: "25000",
      cuisines: ["North Indian"],
      avgRating: 4.2,
      deliveryTime: 37,
    },
  },
  {
    info: {
      id: "101651",
      name: "Chotiwala",
      cloudinaryImageId: "asr5lahfrmx8imyspbn8",
      costForTwo: "30000",
      cuisines: ["North Indian"],
      avgRating: 4.1,
      deliveryTime: 39,
    },
  },
  {
    info: {
      id: "84911",
      name: "Jain Family Restaurant",
      cloudinaryImageId: "sc86aemjzooslj0ph11n",
      costForTwo: "20000",
      cuisines: ["Thalis", "Indian"],
      avgRating: 3.8,
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "702017",
      name: "Indian Coffee House",
      cloudinaryImageId: "18a94c2ebb12593cd093c7c3f8bc72e0",
      costForTwo: "25000",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      deliveryTime: 34,
    },
  },
  {
    info: {
      id: "553833",
      name: "Biryani By Kilo",
      cloudinaryImageId: "rijuo6ly5qkvcsv8gmuw",
      costForTwo: "49900",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.3,
      deliveryTime: 60,
    },
  },
];

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

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;

  return (
    <div className="res-card">
      <img
        className="restaurant-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          cloudinaryImageId
        }
        alt="restaurant-image"
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rating</h4>
      <h4>&#x20b9;{costForTwo / 100} FOR TWO</h4>
      <h4>ETA {deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">SearchBar</div>
      <div className="res-container">
        {restaurantList.map((restaurantData) => (
          <RestaurantCard key={restaurantData.info.id} resData={restaurantData} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
