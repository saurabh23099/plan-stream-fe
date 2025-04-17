import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isIntractive: boolean;
}

const initialState: ToggleState = {
  isIntractive: true,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isIntractive = !state.isIntractive;
    },
  },
});

export const { toggleMode } = toggleSlice.actions;
export default toggleSlice.reducer;
