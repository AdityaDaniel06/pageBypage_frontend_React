import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeoCoding";
import { message } from "antd";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    //  navigator.geolocation.getCurrentPosition method is called to get the user's current position.
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    try {
      // 1) We get the user's geolocation position
      const positionObj = await getPosition();
      const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };
      console.log("position", position);

      // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
      const addressObj = await getAddress(position);
      console.log("addressObj", addressObj);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
      // 3) Then we return an object with the data that we are interested in
      return { position, address }; // : this becomes payload for fulfiled state
    } catch (error) {
      console.error(error);
      message.error("An error occurred while fetching the address");
    }
  },
);

const initialState = {
  firstname: "Aditya",
  status: "idle",
  position: {},
  address: "",
  error: null,
  isAuthenticated: false,
  isAdmin: true, // set to false before deploying
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.firstname = action.payload;
    },
    login: (state, action) => {
      state.firstname = action.payload;
      state.isAuthenticated = true;
      // console.log("login", state.firstname);
    },
    logout: (state) => {
      state.firstname = "";
      state.isAuthenticated = false;
    },
    updateAdmin: (state) => {
      state.isAdmin = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        // console.log("Fetch address  before fulfilled:", action.payload);
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
        // console.log("Fetch address after fulfilled:", state);
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        // console.log("Fetch address rejected:", action.error.message);
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateName, login, logout, updateAdmin } = userSlice.actions;

export default userSlice.reducer;
