import { createSlice } from "@reduxjs/toolkit";

// نحاول نجيب الثيم من localStorage لو موجود
const initialTheme =
  (typeof window !== "undefined" && localStorage.getItem("theme")) || "light";

const initialState = {
  mode: initialTheme, // "light" أو "dark"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      // نخزنه عشان يضل بعد الريلود
      localStorage.setItem("theme", state.mode);
    },
    setTheme(state, action) {
      state.mode = action.payload; // "light" أو "dark"
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
