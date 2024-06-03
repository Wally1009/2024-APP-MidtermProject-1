import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from "react-native";

// Part1: Define Slice (including reducers and actions)
const initialState = {
   general: {
      email: "",
      password:""
   },
   login: {
      hasLogin: false,
   },
   colorMode: "light",
};

const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      setGeneralAccountInfo: (state, action) => {
         state.general = action.payload;
      },
      login: (state) => {
         state.login.hasLogin = true;
      },
      logout: (state) => {
         state.login.hasLogin = false;
      },
      toggleColorMode:(state) => {
         state.colorMode = state.colorMode === "light" ? "dark" : "light";
         Appearance.setColorScheme(state.colorMode);
      },
   },
});

// export state to global
export const selectGeneral = (state) => state.account.general;
export const selectHasLogin = (state) => state.account.login.hasLogin;
export const selectColorMode = (state) => state.account.colorMode;

// export actions to global
export const { setGeneralAccountInfo, login, logout, toggleColorMode } = accountSlice.actions;

// export reducer to global
export default accountSlice.reducer;