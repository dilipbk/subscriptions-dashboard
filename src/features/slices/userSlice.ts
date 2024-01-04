// src/features/usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    usersLoading(state) {
      state.status = "loading";
    },
    usersReceived(state, action) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    usersError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { usersLoading, usersReceived, usersError } = userSlice.actions;
export default userSlice.reducer;
