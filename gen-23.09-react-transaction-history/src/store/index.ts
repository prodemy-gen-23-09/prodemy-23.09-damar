import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import checkoutSlice from "./slices/checkoutSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    checkout: checkoutSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
