import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});
const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error", action.payload);
      state.isError = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default UserSlice.reducer;
