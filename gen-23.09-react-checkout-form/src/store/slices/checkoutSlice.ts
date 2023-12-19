import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CartPayload,
  CheckoutState,
} from "../../interfaces/cartInterface";

const initialState: CheckoutState = {
  userId: null,
  checkout_items: [],
  promo: null,
  total_price: 0,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutData: initialState,
  },
  reducers: {
    setCheckoutFormCart: (state, action: PayloadAction<CartPayload>) => {
      const cartPayload = action.payload;
      state.checkoutData = { ...initialState, ...cartPayload };
    },
    resetCheckoutData: (state) => {
      state.checkoutData = initialState;
    }
  },
});

export const { setCheckoutFormCart } = checkoutSlice.actions;

export default checkoutSlice.reducer;
