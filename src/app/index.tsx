import AppRouter from "./AppRoutes";
import { useGetSubscriptionsQuery, useGetUsersQuery } from "../api/apiSlice";
import {
  usersError,
  usersLoading,
  usersReceived,
} from "../features/slices/userSlice";
import {
  subscriptionsLoading,
  subscriptionsReceived,
  subscriptionsError,
} from "../features/slices/subscriptionSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const {
    data: users,
    isLoading: isUSersLoading,
    isFetching: isUsersFetching,
    isSuccess: isUsersSuccess,
    isError: isUsersError,
    error: userError,
  } = useGetUsersQuery();

  const {
    data: subscriptions,
    isLoading: isSubscriptionsLoading,
    isFetching: isSubscriptionsFetching,
    isSuccess: isSubscriptionsSuccess,
    isError: isSubscriptionsError,
    error: subsError,
  } = useGetSubscriptionsQuery();

  useEffect(() => {
    if (isUSersLoading || isUsersFetching) dispatch(usersLoading());
    if (isUsersError) dispatch(usersError(userError));
    if (users) {
      dispatch(usersReceived(users));
    }
  }, [dispatch, users]);

  useEffect(() => {
    if (isSubscriptionsLoading || isSubscriptionsFetching)
      dispatch(subscriptionsLoading());
    if (isSubscriptionsError) dispatch(subscriptionsError(subsError));
    if (subscriptions) {
      dispatch(subscriptionsReceived(subscriptions));
    }
  }, [dispatch, subscriptions]);

  return <AppRouter />;
}

export default App;
