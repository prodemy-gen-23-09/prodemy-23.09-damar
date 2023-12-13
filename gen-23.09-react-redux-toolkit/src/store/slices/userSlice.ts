import { createSlice } from "@reduxjs/toolkit";

interface UserData {
    id: number;
    email: string;
    name: string;
    role: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null as UserData | null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
