import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../features/posts/slice.js';
import usersReducer from '../features/users/usersSlice.js'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export default store;