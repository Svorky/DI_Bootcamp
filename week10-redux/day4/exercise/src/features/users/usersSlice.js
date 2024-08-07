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
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'pending';
                // console.log('pending')
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'done';
                // console.log('done')
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action)=>{
                state.status = 'failed'
            });
    }
});

export default usersSlice.reducer;