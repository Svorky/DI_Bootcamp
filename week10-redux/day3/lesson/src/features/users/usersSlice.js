import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    status: 'idle'
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        addPrepare: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, email) {
                const id = Date.now();
                return { payload: { id, name, email } };
            }
        },
        initUsers: (state, action) => {
            state.users = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = '';
                state.users = action.payload
            });
    }
});

export const { add, addPrepare, initUsers } = usersSlice.actions;

export default usersSlice.reducer;