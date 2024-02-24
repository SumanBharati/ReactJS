import { CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
  const { itemCards } = props.data;
  return (
    <div>
      {itemCards.map(
        (menuItem) => (
          <>
            <div className="flex">
              <div className="w-9/12 m-2 p-2 text-left">
                <div className="font-semibold text-blue-700">
                  {menuItem.card.info.name}
                </div>
                <div className="text-sm">
                  &#x20B9;
                  {menuItem.card.info.price
                    ? menuItem.card.info.price / 100
                    : menuItem.card.info.defaultPrice / 100}
                </div>
                <div className="text-xs">{menuItem.card.info.description}</div>
              </div>
              <div className="w-3/12 m-4 p-4">
                <img
                  src={CDN_URL + menuItem.card.info.imageId}
                  alt="food-image"
                />
                <div className="bg-gray-600 border border-gray-400 text-white pl-1 mx-8 w-12 absolute rounded-md">
                  Add+
                </div>
              </div>
            </div>
            <hr />
          </>
        )
        // menuItem.card.info.name
      )}
    </div>
  );
};

export default MenuItem;
