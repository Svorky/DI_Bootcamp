import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    status: 'idle'
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // const posts = await response.json()
        return response.data;
        // return posts
    } catch(error) {
        console.error(error);
    }
});


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addReaction: (state, action) => {
            const { id, name } = action.payload;
            const post = state.posts.find(post => post.id === id);
            if(post) {
                post.reactions[name]++;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'done';

                const loadedPost = action.payload.map(post => {
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    };
                    return post;
                });

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
            });
    }
});

export const { addReaction} = postsSlice.actions
export default postsSlice.reducer;