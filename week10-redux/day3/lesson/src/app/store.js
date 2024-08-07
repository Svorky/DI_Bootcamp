import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from '../features/counter/counterSlice.js';
import usersReducer from '../features/users/usersSlice.js';

import { initUsers } from '../features/users/usersSlice.js';

const appReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
});

export const logger = store => next => action => {
    console.log('current state', store.getState());
    console.log(action);
    const retAction = next(action);
    console.log(retAction);
    console.log(store.getState());
};

const store = configureStore({
    reducer: appReducer,
    // middleware: () => [logger]
});

export default store;

// const iUsers = () => async (dispatch, getState) => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();
//         dispatch(initUsers(users));
//     } catch(error) {
//         console.error(error);
//     }
// };

// store.dispatch(iUsers())

const fetchUsers = () => async (dispatch, getState) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch(initUsers(users));
    } catch(error) {
        console.error(error);
    }
};

// store.dispatch(fetchUsers())