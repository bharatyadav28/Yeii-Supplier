import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const unauthUserSlice = createSlice({
  name: "unauthUser",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.email = action.payload.email;
    },
    clearDetails: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDetails, clearDetails } = unauthUserSlice.actions;

export default unauthUserSlice.reducer;
