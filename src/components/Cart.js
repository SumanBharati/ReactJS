import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="w-6/12 mx-auto my-4 text-center">
      <h1 className="font-customised text-2xl font-bold">Cart</h1>
      <div className="m-2 p-2 bg-gray-100 rounded-lg">
        <MenuItem itemCards={cartItem} />
      </div><hr />
    </div>
  );
};

export default Cart;
