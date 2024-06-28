import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userLoggedIn: {},
  adminLoggedIn: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
    adminOut: (state, action) => {
      state.admin = action.payload;
    },
    adminIn: (state, action) => {
      state.admin = action.payload;
    },
  },
});
export const { logout, adminOut, adminIn, login } = AuthSlice.actions;
export default AuthSlice.reducer;
