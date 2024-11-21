import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      if (state.cart.length >= 1) {
        console.log("Book Already in cart");
      } else {
        state.cart.push(action.payload);
        console.log("Book added to cart");
      }
    },
    removeItemFromCart(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //1) find the item in the cart array & increment ,
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //1) find the item in the cart array & increment ,
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
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
