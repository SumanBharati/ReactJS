import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
