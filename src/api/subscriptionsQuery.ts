import { useQuery } from "react-query";
import { getData } from "./getData";
import { SUBSCRIPTION_ROUTE } from "./config";

export const subscriptionsQuery = () => {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: () => getData(SUBSCRIPTION_ROUTE),
  });
};
