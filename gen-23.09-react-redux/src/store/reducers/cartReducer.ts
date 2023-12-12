import { Product } from "../../interfaces/productInterface";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../types";

interface CartItem {
  product: Product;
  quantity: number;
}

const initialState = [] as CartItem[];

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const cartWithoutTheItem = state.filter(
        (item: CartItem) => item.product.id !== action.payload.product.id,
      );

      const existingItem = state.find(
        (item: CartItem) => item.product.id === action.payload.product.id,
      );

      if (existingItem) {
        if (
          existingItem.quantity + action.payload.quantity >
          existingItem.product.stock
        ) {
          return state;
        }

        return [
          ...cartWithoutTheItem,
          {
            ...existingItem,
            quantity: existingItem.quantity + action.payload.quantity,
          },
        ];
      }

      return [...state, action.payload];

    case REMOVE_ITEM_FROM_CART:
      const cartDataAfterItemRemoved = state.filter(
        (item: CartItem) => item.product.id !== action.payload,
      );

      return cartDataAfterItemRemoved;
      
    default:
      return state;
  }
};

export default cartReducer;
