import { useSelector } from "react-redux";

const useDataSelector = () => {
  const users = useSelector((state) => state.users.data);
  const subscriptions = useSelector((state) => state.subscriptions.data);
  const selectPaginatedUsers = (limit: number, page: number) => {
    return users.slice((page - 1) * limit, page * limit);
  };

  const selectSubscriptionPlans = () =>
    Object.entries(
      Object.groupBy(subscriptions, ({ package: plan }) => plan)
    ).map(([plan, planArr]) => ({ plan, usersCount: planArr.length }));

  return { selectPaginatedUsers, selectSubscriptionPlans };
};

export default useDataSelector;
