import useSWR from "swr";
import { getProductInCart } from "../axios/cartAxios";

export const getCart = (userId: number) => {
  const { data, error } = useSWR(
    `http://localhost:8080/users/${userId}/cart_items`,
    getProductInCart,
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
