import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    status: 'idle'
};

export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5);
            // rej(10)
        }, 5000);
    });
});

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
        reset: state => { state.count = 0; },
        incrementByNum: (state, action) => {
            state.count += action.payload;
        },
    },
    extraReducers: (builder) => {
        console.log('builder');
        builder
            .addCase(delayIncrementThunk.pending, (state, action) => {
                // state.count += 5
                state.status = 'pending';
            })
            .addCase(delayIncrementThunk.fulfilled, (state, action) => {
                console.log(action);
                state.count += action.payload;
            })
            .addCase(delayIncrementThunk.rejected, (state, action) => {
                state.count -= Number(action.error.message);
            });
    }
});

export const { increment, decrement, reset, incrementByNum } = counterSlice.actions;

export default counterSlice.reducer;