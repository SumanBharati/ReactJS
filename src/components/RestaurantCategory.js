import MenuItem from "./MenuItem";
import { useState } from 'react';

const RestaurantCategory = (props) => {
  const [collapseAccordian, setCollapseAccordian] = useState(true);
  
  const { title } = props.data?.card?.card;

  const { itemCards } = props.data?.card?.card

  const handleClick = () => {
    props.setShowIndex();
    setCollapseAccordian(!collapseAccordian);
  }

  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg rounded-lg hover: cursor-pointer">
      <div className="flex justify-between" onClick={handleClick}>
        <div className="font-semibold">{title} ({itemCards.length})</div>
        <div>{props.showIndex && !collapseAccordian ? '🔼' : '🔽' }</div>
      </div>
        {props.showIndex && !collapseAccordian && <MenuItem data={props.data?.card?.card} />}
    </div>
  );
};

export default RestaurantCategory;
