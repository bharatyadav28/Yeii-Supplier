import { configureStore } from "@reduxjs/toolkit";

import unauthUserReducer from "./feature/UnauthUser";

export const store = configureStore({
  reducer: {
    unauthUser: unauthUserReducer,
  },
});
