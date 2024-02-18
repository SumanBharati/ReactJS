import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaunts, setResListlistOfRestaunts] = useState(restaurantList);

  const handleClick = () => {
    setResListlistOfRestaunts(listOfRestaunts.filter((restaurants) => restaurants.info.avgRating > 4));
  };

  return (
    <div className="body">
      {/* <div className="search-bar">SearchBar</div> */}
      <button className="filter" onClick={handleClick}>
        Rating Filter
      </button>
      <div className="res-container">
        {listOfRestaunts.map((restaurantData) => (
          <RestaurantCard
            key={restaurantData.info.id}
            resData={restaurantData}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
