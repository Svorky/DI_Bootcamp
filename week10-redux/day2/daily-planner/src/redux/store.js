import { configureStore } from "@reduxjs/toolkit";
import { plannerReducer } from "./reducer.js";

const store = configureStore({
  reducer: {
    plannerReducer,
  },
});

export default store;
