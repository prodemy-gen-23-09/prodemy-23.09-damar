import useSWR from "swr";
import { fetchWishlist } from "../axios/wishlistAxios";

export const getWishlist = (userId: number) => {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:8080/600/users/${userId}/wishlist`,
    fetchWishlist,
  );

  return {
    wishlist: data,
    isLoading: isLoading,
    isError: error,
    mutate,
  };
};
