import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartSlices,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
