import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  cart_id: null,
  resource: null,
  info: null,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.auth = action.payload;
    },
    Info: (state, action) => {
      state.info = action.payload;
    },
    Logout: (state, action) => {
      state.auth = null;
      state.cart_id = null;
    },
    Logoinfo: (state, action) => {
      state.info = null;
      state.cart_id = null;
    },
    AddCart: (state, action) => {
      state.cart_id = action.payload;
    },
    AddSource: (state, action) => {
      state.resource = action.payload;
    },
  },
});

export const { Login, Logout, AddCart, AddSource, Info,Logoinfo } = counterSlice.actions;
export default counterSlice.reducer;
