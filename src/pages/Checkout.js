import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [payment, setPayment] = useState("card");
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.includes("@")) newErrors.email = "Email is invalid";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      dispatch(clearCart());
      setLoading(false);
      navigate("/success");
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* SUMMARY */}
      <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-8">Order Summary</h3>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm mb-3"
              >
                <div className="flex items-center gap-4">
                  <span>
                    <img
                      className="w-20"
                      src={item.image}
                      alt={item.image}
                    />{" "}
                  </span>

                  <span className="flex flex-col justify-start">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-gray-500">
                      ${item.price} x {item.quantity}
                    </span>
                  </span>
                </div>

                <div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>

      {/* CHECKOUT FORM */}
      <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="input w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="input w-full"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* City */}
          <div>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="input w-full"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* PAYMENT METHOD */}
          <div className="md:col-span-2 mt-4">
            <h3 className="font-semibold mb-3">Payment Method</h3>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                Credit Card
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={payment === "paypal"}
                  onChange={() => setPayment("paypal")}
                />
                PayPal
              </label>
            </div>
          </div>

          {payment === "card" && (
            <div className="md:col-span-2 mt-4 bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-semibold mb-3">Card Details</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="input w-full"
                />
                <input type="text" placeholder="CVC" className="input w-full" />
              </div>
            </div>
          )}
          {payment === "card" && (
            <p className="text-gray-500 text-sm mt-2">
              Enter fake card info for demo purposes.
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="button"
            disabled={!cartItems.length || loading}
            onClick={handleSubmit}
            className="md:col-span-2 mt-6 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white py-3 rounded-xl disabled:bg-gray-400"
          >
            {loading ? "Processing Payment..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
