import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const list = useRestaurantsList();
  const mainList = list[0];
  const mainListCopy = list[1];
  // const [mainList, setMainList] = useState(list[0]);
  // const [mainListCopy, setMainListCopy] = useState(list[1]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    console.log("Need to fix this filter");
    // const filteredList = mainList.filter((restaurant) => {
    //   restaurant.info && restaurant.info.avgRating > 4
    // });
    // setMainListCopy(filteredList);
  };

  // const handleChange = (e) => {
  //   setSearchText(e.target.value);
  //   if(e.target.value == ""){
  //     handleFetch();
  //   }
  // }

  if (onlineStatus === false)
    return <h1>Please check your internet connection!!! You seems offline.</h1>;

  // Conditional Rendering
  return mainList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Need to fix this searchBar");
              // const searchedList = mainList.filter((restaurant) => {
              //   restaurant.info.name
              //     .toLowerCase()
              //     .includes(searchText.toLowerCase());
              // });
              // setMainListCopy(searchedList);
              // const filterList = list[0].filter((restaurants) =>
              //   restaurants.info.name
              //     .toLowerCase()
              //     .includes(searchText.toLowerCase())
              // );
              // setFilteredListOfRestaurants(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={handleClick}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {mainListCopy.map((restaurantData) => (
          <Link
            className="link"
            key={restaurantData.info.id}
            to={"/restaurant/" + restaurantData.info.id}
          >
            <RestaurantCard resData={restaurantData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
