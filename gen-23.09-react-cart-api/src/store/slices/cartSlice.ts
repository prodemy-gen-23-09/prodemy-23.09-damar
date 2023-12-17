import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cartInterface";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [] as CartItem[],
  },
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
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
          return;
        }

        state.cartData = [
          ...cartWithoutTheItem,
          {
            ...existingItem,
            quantity: existingItem.quantity + action.payload.quantity,
          },
        ];
        
        return;
      }

      state.cartData = [...state.cartData, action.payload];
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartData = state.cartData.filter(
        (item) => item.product.id !== action.payload,
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;