import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk("fetchUserPost", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
});

const Comments = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchComment.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});
export default Comments.reducer;
