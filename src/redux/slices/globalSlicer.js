import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUp: true,
};

const globalSlicer = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSignUp: (state, action) => {
      state.isSignUp = true;
    },
  },
});

export const { setSignUp } = globalSlicer.actions;
export default globalSlicer.reducer;
