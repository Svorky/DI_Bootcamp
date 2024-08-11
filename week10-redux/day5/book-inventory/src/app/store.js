import { configureStore } from "@reduxjs/toolkit";

import booksReducer from '../features/books/slice.js';

const store = configureStore({
    reducer: {
        books: booksReducer
    }
});

export default store;