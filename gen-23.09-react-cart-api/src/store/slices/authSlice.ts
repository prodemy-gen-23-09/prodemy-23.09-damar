import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AuthResponse,
  UserResponse,
} from "../../interfaces/userInterface";

const initialState: AuthResponse = {
  accessToken: "",
  user: {
    id: 0,
    email: "",
    name: "",
    role: "",
  },
};

const getStoredAuthState = () => {
  const storedToken = localStorage.getItem("accessToken");
  const storedUser = localStorage.getItem("user");

  if (storedToken && storedUser) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    return {
      accessToken: storedToken as string,
      user: JSON.parse(storedUser) as UserResponse,
    };
  }

  return { ...initialState };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getStoredAuthState(),
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      state.accessToken = token;
      localStorage.setItem("accessToken", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    setUser: (state, action: PayloadAction<UserResponse>) => {
      const user = action.payload;
      state.user = user;

      localStorage.setItem("user", JSON.stringify(user));
    },

    resetAuth: () => {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      return { ...initialState };
    },
  },
});

export const { setAccessToken, setUser, resetAuth } = authSlice.actions;
export default authSlice.reducer;
