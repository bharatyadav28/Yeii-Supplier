import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  isSignup: false,
};

export const unauthUserSlice = createSlice({
  name: "unauthUser",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.email = action.payload.email;
      state.isSignup = action.payload.isSignup;
    },
    clearDetails: (state) => {
      state.email = null;
      state.isSignup = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDetails, clearDetails } = unauthUserSlice.actions;

export default unauthUserSlice.reducer;
