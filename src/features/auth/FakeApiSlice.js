import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFakeApi = createAsyncThunk("fetchUser", async () => {
  const res = await fetch("http://localhost:3001/roleBasedAuth");
  return res.json();
});
const FakeApiSlice = createSlice({
  name: "fakeapi",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFakeApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFakeApi.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error", action.payload);
      state.isError = true;
    });
    builder.addCase(fetchFakeApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default FakeApiSlice.reducer;
