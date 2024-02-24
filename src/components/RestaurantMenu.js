import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from 'react';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const menuList = useRestaurantMenu(resId);

  if (menuList === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center my-2">
      <div className="font-customised font-bold text-2xl">
        {name.toUpperCase()}
      </div>
      <div className="justify-between my-2">
        <div>
          <label className="font-medium">CUISINES:</label> {cuisines.join(", ")}
        </div>
        <div>{costForTwoMessage.toUpperCase()}</div>
      </div>
      <div>
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.id}
            data={category}
            showIndex={index === showIndex ? true : false}
            setShowIndex={() => {setShowIndex(index)}}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
