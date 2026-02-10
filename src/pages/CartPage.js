import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export default function CartPage() {
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.items || []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2>Your Cart Is Empty.</h2>
          <p className="text-gray-600 mb-4">
            Add Some products to your Cart to see them here.
          </p>
          <Link
            to={"/"}
            className="inline-block bg-zinc-200 px-6 py-2 rounded-lg hover:bg-zinc-300 transition-all duration-300"
          >
            Continue Shopping.
          </Link>
        </div>
      </div>
    );
  }

  const cartItemsList = cartItems?.map((item) => (
    <div key={item.id}>
      <div className="flex items-center gap-4 py-4 border-b-2">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-24 object-cover rounded"
          />
        </Link>

        <div className="flex-1">
          <Link
            to={`/product/${item.id}`}
            className="font-semibold hover:text-blue-700 transition-all"
          >
            {item.title}
          </Link>
          <p className="text-gray-600">${item.price}</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              className="p-1 rounded-full bg-zinc-300 hover:bg-zinc-500 transition-all ease-in-out hover:text-white"
              onClick={() => {
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Math.max(0, item.quantity - 1),
                  }),
                );
                toast.success("Quantity updated.");
              }}
            >
              <Minus size={16} />
            </button>
            <span className="text-lg">{item.quantity}</span>
            <button
              className="p-1 rounded-full bg-zinc-300 hover:bg-zinc-500 transition-all ease-in-out hover:text-white"
              onClick={() => {
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  }),
                );
                toast.success("Quantity updated.");
              }}
            >
              <Plus size={16} />
            </button>
            <div
              className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => {
                dispatch(removeFromCart(item));
                toast.error("The product has been removed.");
              }}
            >
              <Trash2 size={20} />
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-semibold text-2xl mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItemsList}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 ">Order Summary</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$49.99</span>
              </div>

              <div className="flex justify-between pt-2 font-bold">
                <span>Total</span>
                <span>${(total + 49.99).toFixed(2)}</span>
              </div>
            </div>
            <Link
              to={"/checkout"}
              className="w-full text-center py-3 px-6 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
