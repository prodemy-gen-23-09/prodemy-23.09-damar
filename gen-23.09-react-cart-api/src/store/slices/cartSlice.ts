import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cartInterface";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [] as CartItem[],
  },
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartData = action.payload;
    }
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;