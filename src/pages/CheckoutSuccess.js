import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-md border max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Order Placed 🎉</h1>

        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
