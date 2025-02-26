import { useDispatch, useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";
import { MdOutlineMyLocation } from "react-icons/md";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalCartPrice);
  const cartItems = useSelector((state) => state.cart.cart);

  const user = useSelector((state) => state.user);
  const isAddressLoading = user.status === "loading";

  async function handlePayment(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/product/order", {
        amount: totalPrice,
      });

      if (response.status === 200) {
        setOrderId(response.data.id); // Set the received order ID
        initiatePayment(response.data.id); // Trigger payment once order ID is set
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while placing the order.");
    }
  }

  const initiatePayment = (orderId) => {
    const options = {
      key: "rzp_test_YLUxcOh2nP6gS5",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Page By Page",
      description: "Test Transaction",
      order_id: orderId,
      handler: async function (response) {
        try {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            amount: totalPrice,
            items: cartItems,
          };
          await axios.post("http://localhost:8080/product/verify", data);
          message.success("Payment Successful");
        } catch (error) {
          console.error(error);
          message.error("An error occurred while processing the payment.");
        }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      theme: {
        color: "#4db96f",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  function getUserAddress() {
    dispatch(fetchAddress());
  }

  return (
    <div className="container mx-auto my-12 px-4 md:flex md:gap-8 lg:px-16">
      {/* Form Section */}
      <div className="w-full rounded-lg bg-white p-8 shadow-lg md:w-2/3">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Add Your Details
        </h1>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Address Field */}
          <div>
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              disabled={isAddressLoading}
              defaultValue={user.address}
              className={`mt-2 w-full rounded-md border px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 ${
                isAddressLoading ? "text-gray-400" : ""
              }`}
            />
            {isAddressLoading && (
              <p className="mt-1 text-sm text-emerald-600">
                Loading address...
              </p>
            )}
            {user.address === "error" && (
              <p className="mt-1 text-sm text-red-600">
                Unable to fetch address. Please enter it manually.
              </p>
            )}
          </div>

          {/* Get Location Button */}
          {!user.position?.latitude && !user.position?.longitude && (
            <div className="flex items-center gap-2">
              <MdOutlineMyLocation className="text-emerald-500" size={20} />
              <button
                type="button"
                disabled={isAddressLoading}
                onClick={getUserAddress}
                className="text-sm font-medium text-emerald-600 hover:underline"
              >
                Use Current Location
              </button>
            </div>
          )}

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handlePayment}
            disabled={isAddressLoading}
            className="w-full rounded-md bg-emerald-600 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Price Details Section */}
      <div className="mt-8 w-full rounded-lg bg-gray-50 p-8 shadow-lg md:mt-0 md:w-1/3">
        <h3 className="mb-6 text-2xl font-bold text-gray-800">Price Details</h3>
        <div className="mb-4 flex justify-between text-lg">
          <p className="text-gray-600">Subtotal:</p>
          <p className="font-medium">₹{totalPrice}</p>
        </div>
        <div className="mb-4 flex justify-between text-lg">
          <p className="text-gray-600">Shipping:</p>
          <p className="font-medium">₹99</p>
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-4 text-xl font-bold">
          <p>Total:</p>
          <p>₹{totalPrice + 99}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
