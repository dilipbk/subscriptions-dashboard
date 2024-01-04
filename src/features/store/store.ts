// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import usersReducer from "../slices/userSlice";
import subscriptionsReducer from "../slices/subscriptionSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    subscriptions: subscriptionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
