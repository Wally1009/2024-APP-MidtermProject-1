import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = {
   general: {
      email: "",
      password:""
   },
   login: {
      hasLogin: false,
   },
   darkMode: {
      isDarkMode: false,
   },
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
      toggleDarkMode:(state) => {
         state.darkMode.isDarkMode = state.darkMode.isDarkMode === false ? true : false;
      },
   },
});

// export state to global
export const selectGeneral = (state) => state.account.general;
export const selectHasLogin = (state) => state.account.login.hasLogin;
export const selectIsDarkMode = (state) => state.account.darkMode.isDarkMode;

// export actions to global
export const { setGeneralAccountInfo, login, logout, toggleDarkMode } = accountSlice.actions;

// export reducer to global
export default accountSlice.reducer;