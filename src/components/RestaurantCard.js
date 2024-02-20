import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <p className="res-name">{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} rating</p>
      <p>{costForTwo}</p>
      <p>ETA: {sla?.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
