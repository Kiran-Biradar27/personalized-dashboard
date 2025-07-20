import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  showWeather: boolean;
  showNews: boolean;
  showStocks: boolean;
  theme: "light" | "dark";
  language: "en" | "hi";
}

const initialState: PreferencesState = {
  showWeather: true,
  showNews: true,
  showStocks: true,
  theme: "light",
  language: "en",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    toggleWeather(state) {
      state.showWeather = !state.showWeather;
    },
    toggleNews(state) {
      state.showNews = !state.showNews;
    },
    toggleStocks(state) {
      state.showStocks = !state.showStocks;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
    togglePreference(state, action: PayloadAction<"showWeather" | "showNews" | "showStocks">) {
      const key = action.payload;
      state[key] = !state[key];
    },
    setLanguage(state, action: PayloadAction<"en" | "hi">) {
      state.language = action.payload;
    },
  },
});

export const {
  toggleWeather,
  toggleNews,
  toggleStocks,
  toggleTheme,
  setTheme,
  togglePreference,
  setLanguage,
} = preferenceSlice.actions;

export default preferenceSlice.reducer;
