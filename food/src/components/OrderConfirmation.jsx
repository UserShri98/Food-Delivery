import { Link } from "react-router-dom";

const generateOrderId = () => {
  return "ORD-" + Math.floor(100000 + Math.random() * 900000);
};

const OrderConfirmation = () => {
  const orderId = generateOrderId();
  const expectedDeliveryTime = `${30 + Math.floor(Math.random() * 20)} mins`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">✅ Order Placed Successfully!</h2>
        <p className="text-lg text-gray-700 mb-2">Order ID: <span className="font-semibold">{orderId}</span></p>
        <p className="text-lg text-gray-700 mb-6">Expected Delivery: <span className="font-semibold">{expectedDeliveryTime}</span></p>

        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
