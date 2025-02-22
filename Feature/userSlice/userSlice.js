"use client";

import { createSlice } from "@reduxjs/toolkit";

const getUserData = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("user")) || null;
  }
  return null; 
};

export const userSlice = createSlice({
  name: "user",
  initialState: { 
    value: getUserData(),
  },
  reducers: {
    activeUser: (state, action) => {
      state.value = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    clearUser: (state) => {
      state.value = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { activeUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
