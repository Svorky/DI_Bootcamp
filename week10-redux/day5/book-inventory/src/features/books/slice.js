import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('posts/fetchBooks', async () => {
    try {
        const response = await axios.get('https://freetestapi.com/api/v1/books');
        return response.data;
    } catch(error) {
        console.error(error);
    }
});

const initialState = {
    books: [],
    status: "", // loading, success, failed,
    genre: -1,
  };

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        filterGenre: (state, action) => {
            state.genre = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                // state.status = 'pending';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                // state.status = 'done';
                state.books = action.payload
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                // state.status = 'failed';
            });
    }
});

export const { filterGenre} = booksSlice.actions
export default booksSlice.reducer;