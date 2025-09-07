import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlicer";
import GlobalReducer from "./slices/globalSlicer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    global: GlobalReducer,
  },
});

export default store;
