import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./reducer.js";

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
