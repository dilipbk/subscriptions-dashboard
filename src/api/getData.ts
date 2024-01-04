import { useAxios } from "./axios";

export const getData = async (url: string) => {
  const response = await useAxios.get(url);
  const data = await response.data;
  return data;
};
