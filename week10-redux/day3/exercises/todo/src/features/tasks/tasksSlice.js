import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                ...action.payload
            })
        },
        toggleTodo: (state,action) => {
            const task = state.tasks.find( task => task.id === action.payload.id)
            task.complete = !task.complete
        },
        removeTodo: (state,action) => {
            state.tasks = state.tasks.filter( task => task.id !== action.payload.id)
        }
    }
})

export const { addTodo, toggleTodo, removeTodo } = tasksSlice.actions;

export default tasksSlice.reducer;