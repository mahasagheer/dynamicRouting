import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserPost = createAsyncThunk("fetchUserPost", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

const UserPost = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUserPost.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});
export default UserPost.reducer;
