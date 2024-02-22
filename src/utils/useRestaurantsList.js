import { useState, useEffect } from "react";

const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchRestuarantList();
  }, []);

  const fetchRestuarantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return [listOfRestaurants, filteredListOfRestaurants];
};

export default useRestaurantsList;
