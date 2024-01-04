import { useQuery } from "react-query";
import { getData } from "./getData";
import { USER_ROUTE } from "./config";

export const usersQuery = () => {
  return useQuery({ queryKey: ["users"], queryFn: () => getData(USER_ROUTE) });
};
