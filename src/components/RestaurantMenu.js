import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const menuList = useRestaurantMenu(resId);

  if (menuList === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((foodItem) => (
          <li key={foodItem.card.info.id}>
            {foodItem.card.info.name} -  &#x20B9;{foodItem.card.info.price/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
