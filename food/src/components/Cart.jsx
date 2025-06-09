import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">🛒 Your Cart</h1>

        <div className="flex justify-center mb-6">
          <button
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-lg">Your cart is empty!</h2>
            <p className="text-sm text-gray-500 mt-1">
              Please add some items to place an order.
            </p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
