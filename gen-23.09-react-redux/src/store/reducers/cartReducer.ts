import { Product } from "../../interfaces/productInterface";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../types";

interface CartItem {
  product: Product;
  quantity: number;
}

const initialState = { cartData: [] as CartItem[] };

const cartReducer = (
  state = initialState,
  action: any,
): typeof initialState => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const cartWithoutTheItem = state.cartData.filter(
        (item) => item.product.id !== action.payload.product.id,
      );

      const existingItem = state.cartData.find(
        (item) => item.product.id === action.payload.product.id,
      );

      if (existingItem) {
        if (
          existingItem.quantity + action.payload.quantity >
          existingItem.product.stock
        ) {
          return state;
        }

        return {
          cartData: [
            ...cartWithoutTheItem,
            {
              ...existingItem,
              quantity: existingItem.quantity + action.payload.quantity,
            },
          ],
        };
      }

      return { cartData: [...state.cartData, action.payload] };

    case REMOVE_ITEM_FROM_CART:
      const cartDataAfterItemRemoved = state.cartData.filter(
        (item) => item.product.id !== action.payload,
      );

      return { cartData: cartDataAfterItemRemoved };

    default:
      return state;
  }
};

export default cartReducer;
