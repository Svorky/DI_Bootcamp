import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const initialState = {
//     users: [],
//     status: 'idle'
// };

// const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // const posts = await response.json()
        return response.data;
        // return posts
    } catch(error) {
        console.error(error);
    }
});


export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                // state.status = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                // state.status = 'done';
                return action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                // state.status = 'failed';
            });
    }
});

export const { } = usersSlice.actions
export default usersSlice.reducer;