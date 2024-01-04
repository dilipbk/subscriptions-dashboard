// src/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  usersReceived,
  usersLoading,
  usersError,
} from "../features/slices/userSlice";
import {
  subscriptionsLoading,
  subscriptionsReceived,
  subscriptionsError,
} from "../features/slices/subscriptionSlice";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      onQueryStarted: async (_, { dispatch }) => {
        dispatch(usersLoading());
      },
      onSuccess: async (data, _, { dispatch }) => {
        dispatch(usersReceived(data));
      },
      onError: async (error, _, { dispatch }) => {
        dispatch(usersError(error));
      },
    }),
    getUserById: builder.query({
      query: (userId) => `users/${userId}`,
    }),
    getSubscriptions: builder.query({
      query: () => "subscriptions",
      onQueryStarted: async (_, { dispatch }) => {
        dispatch(subscriptionsLoading());
      },
      onSuccess: async (data, _, { dispatch }) => {
        dispatch(subscriptionsReceived(data));
      },
      onError: async (error, _, { dispatch }) => {
        dispatch(subscriptionsError(error));
      },
    }),
    getSubscriptionByUser: builder.query({
      query: (userId) => `subscriptions?user_id=${userId}`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSubscriptionsQuery,
  useGetUserByIdQuery,
  useGetSubscriptionByUserQuery,
} = apiSlice;
