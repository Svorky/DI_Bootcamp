import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from '../features/todos/slice.js';
import categoriesReducer from '../features/categories/slice.js';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer
    }
});

export default store;