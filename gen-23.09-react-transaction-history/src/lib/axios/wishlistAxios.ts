import axios from "axios";
import { WishlistRequest, WishlistResponse } from "../../interfaces/wishlistInterface";

export const createWishlist = async (wishlist: WishlistRequest): Promise<WishlistResponse> => {
  const data = await axios
    .post(`http://localhost:8080/wishlist`, wishlist)
    .then((res) => res.data);

  return data;
};

export const deleteWishlist = async (wishlistId: number) => {
  const data = await axios
    .delete(`http://localhost:8080/wishlist/${wishlistId}`)
    .then((res) => res.data);

  return data;
};

export const fetchWishlist = async (url: string): Promise<WishlistResponse[]> => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};
