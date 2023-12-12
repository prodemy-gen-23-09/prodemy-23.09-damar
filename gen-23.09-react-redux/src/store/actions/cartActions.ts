import { Product } from "../../interfaces/productInterface";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../types";

interface CartItem {
  product: Product;
  quantity: number;
}

export const addProductToCart = (payload: CartItem) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
};

export const removeProductFromCart = (payload: number) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload,
  };
}