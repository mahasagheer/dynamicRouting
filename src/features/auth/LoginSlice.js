import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
};
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const { setEmail, setPassword } = LoginSlice.actions;
export default LoginSlice.reducer;
