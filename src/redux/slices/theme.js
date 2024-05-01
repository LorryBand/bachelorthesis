import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkModeEnabled: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    enableDarkMode(state) {
      state.darkModeEnabled = true;
    },
    disableDarkMode(state) {
      state.darkModeEnabled = false;
    },
  },
});

export const { enableDarkMode, disableDarkMode } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
