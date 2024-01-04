import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    subscriptionsLoading(state) {
      state.status = "loading";
    },
    subscriptionsReceived(state, action) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    subscriptionsError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  subscriptionsLoading,
  subscriptionsReceived,
  subscriptionsError,
} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
