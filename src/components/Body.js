import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaunts, setListOfRestaunts] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Optional Chaining
    setListOfRestaunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleClick = () => {
    setListOfRestaunts(
      listOfRestaunts.filter(
        (restaurants) =>
          restaurants.card?.card?.info &&
          restaurants.card.card.info.avgRating > 4
      )
    );
  };

  // const handleChange = (e) => {
  //   setSearchText(e.target.value);
  //   if(e.target.value == ""){
  //     handleFetch();
  //   }
  // }

  // Conditional Rendering
  return listOfRestaunts.length === 0 ? (
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
              const filterList = listOfRestaunts.filter((restaurants) =>
                restaurants.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filterList);
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
        {filteredListOfRestaurants.map((restaurantData) => (
          <Link className="link" key={restaurantData.info.id} to={"/restaurant/"+restaurantData.info.id}>
            <RestaurantCard resData={restaurantData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
