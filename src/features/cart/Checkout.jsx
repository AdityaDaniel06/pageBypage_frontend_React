import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getTotalCartPrice } from "./cartSlice";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";

function Checkout() {
  const [orderId, setOrderId] = useState(null);
  const totalPrice = useSelector(getTotalCartPrice);
  const cartItems = useSelector((state) => state.cart.cart);
  //   const navigate = useNavigate();

  async function handlePayment(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/product/order", {
        amount: totalPrice,
      });
      //   console.log(response);

      if (response.status === 200) {
        setOrderId(response.id); // Set the received order ID
        initiatePayment(response.id || orderId); // Trigger payment once order ID is set
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while placing the order");
    }
  }
  // Function to initiate Razorpay payment
  const initiatePayment = (orderId) => {
    const options = {
      key: "rzp_test_YLUxcOh2nP6gS5", // Razorpay key ID
      amount: totalPrice * 100, // Amount in paise
      currency: "INR",
      name: "Page By Page",
      description: "Test Transaction",
      //   image: "https://your-logo-url.com",
      order_id: orderId, // The order ID from the backend
      handler: async function (response) {
        try {
          console.log(response);
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            amount: totalPrice,
            items: cartItems,
          };
          const result = await axios.post(
            "http://localhost:8080/product/verify",
            data,
          );
          console.log(result);
          message.success("Payment Successful");
          //   navigate("/"); // Redirect to homepage after successful payment
        } catch (error) {
          console.error(error);
          message.error("An error occurred while processing the payment");
        }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        // contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container mx-auto my-12 gap-12 px-4 md:flex">
      {/* Form Section */}
      <div className="w-full rounded-lg bg-white p-8 shadow-lg md:w-2/3">
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">
          Add your Details
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 w-full rounded-md border border-gray-300 p-3"
              //   required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 w-full rounded-md border border-gray-300 p-3"
              //   required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg text-gray-700">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-2 w-full rounded-md border border-gray-300 p-3"
              //   required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg text-gray-700">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-2 w-full rounded-md border border-gray-300 p-3"
              //   required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-700"
            onClick={handlePayment}
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Price Details Section */}
      <div className="w-full rounded-lg bg-gray-50 p-8 shadow-lg md:w-1/3">
        <h3 className="mb-6 text-2xl font-bold text-gray-800">Price Details</h3>
        <div className="mb-4 flex justify-between text-lg">
          <p className="text-gray-700">Subtotal:</p>
          <p className="font-semibold">₹{totalPrice}</p>
        </div>
        <div className="mb-4 flex justify-between text-lg">
          <p className="text-gray-700">Shipping:</p>
          <p className="font-semibold">₹99</p>
        </div>
        <div className="flex justify-between border-t pt-4 text-xl font-bold">
          <p className="text-gray-700">Total:</p>
          <p>₹{totalPrice + 99}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
