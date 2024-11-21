import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Aditya",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    // login: (state, action) => {
    //   state.username = action.payload;
    //   state.isAuthenticated = true;
    // },
    // logout: (state) => {
    //   state.username = "";
    //   state.isAuthenticated = false;
    // },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
