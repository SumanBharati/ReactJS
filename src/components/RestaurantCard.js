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
    <div className="res-card m-[18px] p-[5px] w-[227px] rounded-lg hover:px-0 pt-0">
      <img
        className="restaurant-image w-[280px] h-[180px] rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <p className="res-name font-customized text-base font-bold mt-2 ml-2.5 mr-[5px] text-gray-900">{name.toUpperCase()}</p>
      <p className="ml-2.5 mr-[5px] font-medium text-gray-700">{cuisines.join(", ")}</p>
      <p className="ml-2.5 mr-[5px] font-medium text-gray-700">{avgRating} rating</p>
      <p className="ml-2.5 mr-[5px] font-medium text-gray-700">{costForTwo}</p>
      <p className="ml-2.5 mr-[5px] font-medium text-gray-700">ETA: {sla?.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
