import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    status: 'idle'
};

export const ageUpAsync = createAsyncThunk('counter/ageUpAsync', (value) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(value);
        }, 5000);
    });
});

export const ageDownAsync = createAsyncThunk('counter/ageDownAsync', (value) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(value);
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
        builder
            .addCase(ageUpAsync.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.status = 'done'
                state.count += action.payload;
            })
            .addCase(ageUpAsync.rejected, (state, action) => {
                state.status = 'failed'
            })
            .addCase(ageDownAsync.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.count -= action.payload;
                state.status = 'done'
            })
            .addCase(ageDownAsync.rejected, (state, action) => {
                state.status = 'failed'
            });
    }
});

export const { increment, decrement, reset, incrementByNum } = counterSlice.actions;

export default counterSlice.reducer;