import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
