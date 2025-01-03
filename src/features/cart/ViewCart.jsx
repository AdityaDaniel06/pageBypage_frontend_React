import { useDispatch, useSelector } from "react-redux";
// import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decreaseItemQuantity,
  getTotalCartPrice,
  getTotalQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "./cartSlice";

function ViewCart() {
  const cartItems = useSelector((state) => state.cart.cart || []);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  //   console.log("Total Price", totalPrice);
  //   console.log("Total Quantity", totalQuantity);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        {/* <img
          src="/empty-cart.png"
          alt="Empty Cart"
          className="mb-6 w-1/2 max-w-xs"
        /> */}
        <h1 className="text-4xl font-bold text-gray-800">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-500">
          Add some items to your cart to get started!
        </p>
        <button
          className="mt-6 rounded-lg bg-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-emerald-700"
          onClick={() => navigate("/")}
        >
          &larr; Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 flex flex-col gap-12 px-4 md:flex-row">
      {/* Cart Items Section */}
      <div className="w-full md:w-2/3">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          My Cart ({totalQuantity} items)
        </h2>

        <ul>
          {cartItems.map((item) => (
            <li
              key={item._id}
              className="mb-6 flex flex-col items-start rounded-lg bg-white p-6 shadow-md md:flex-row md:items-center"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-3/4 md:pl-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {item.category} | {item.language ?? "English"}
                </p>
                <p className="mt-3">
                  <span className="text-xl text-gray-600">₹{item.price}</span>
                  <span className="mx-2 text-gray-500">x</span>
                  <span className="text-gray-600">{item.quantity}</span>
                </p>
                <p className="text-2xl font-bold text-emerald-600">
                  ₹{item.price * item.quantity}
                </p>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <p className="mt-2 text-lg text-yellow-500">
                  Rating: {item.rating} ⭐
                </p>

                {/* Quantity Controls */}
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button
                    className="rounded-full bg-zinc-300 px-4 py-2 font-bold text-gray-800 shadow-md transition duration-200 hover:bg-zinc-400"
                    onClick={() => dispatch(increaseItemQuantity(item._id))}
                  >
                    +
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className={`rounded-full bg-zinc-300 px-4 py-2 font-bold text-gray-800 shadow-md transition duration-200 ${
                      item.quantity === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-zinc-400"
                    }`}
                    onClick={() => dispatch(decreaseItemQuantity(item._id))}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-red-600"
                    onClick={() => dispatch(removeItemFromCart(item._id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-8 flex justify-between">
          <button
            className="rounded-md bg-green-500 px-6 py-3 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-green-600"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
          <button
            className="rounded-md bg-gray-500 px-6 py-3 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-gray-600"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Price Details Section */}
      <div className="w-full md:w-1/3">
        <div className="rounded-lg bg-gray-50 p-6 shadow-md">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Price Details
          </h3>
          <div className="mb-4 flex justify-between text-lg">
            <p>Subtotal:</p>
            <p className="font-semibold">₹{totalPrice}</p>
          </div>
          <div className="mb-4 flex justify-between text-lg">
            <p>Shipping:</p>
            <p className="font-semibold">₹100</p>
          </div>
          <div className="mt-4 flex justify-between border-t pt-4 text-xl font-bold">
            <p>Total:</p>
            <p>₹{totalPrice + 99}</p>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-emerald-700"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
