import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      console.log("add to cart called", action.payload);

      state.cart.push(action.payload);
      message.success("Product Added to Cart");
    },

    removeItemFromCart(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //1) find the item in the cart array & increment ,
      // payload = id
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      //1) find the item in the cart array & increment ,
      // payload = id
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0) {
        state.cart = state.cart.filter((item) => item._id !== action.payload);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item._id === id).quantity;
};
