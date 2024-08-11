import { createSlice } from '@reduxjs/toolkit';

// const initialState = []

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        category: -1,
        done: -1
    },
    reducers: {
        addTask: (state, action) => {
            const tasks = [...state.tasks];
            tasks.push(
                {
                    id: Date.now(),
                    ...action.payload,
                    done: false
                }
            );
            state.tasks = tasks;
            return state;
        },
        changeStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            task.done = !task.done;
            return state;
        },
        deleteTask: (state, action) => {
            return state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.task = action.payload.newValue;
            return state;
        },
        filterCategory: (state, action) => {
            state.category = action.payload;
        },
        filterCompleted: (state, action) => {
            state.done = action.payload;
        },
    }
});

export const { addTask, changeStatus, deleteTask, editTask, filterCategory, filterCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;