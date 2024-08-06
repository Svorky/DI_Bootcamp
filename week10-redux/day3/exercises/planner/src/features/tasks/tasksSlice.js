import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    date: new Date().toLocaleDateString('en-CA')
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                date: state.date,
                ...action.payload
            })
        },
        toggleTodo: (state,action) => {
            const task = state.tasks.find( task => task.id === action.payload.id)
            task.complete = !task.complete
        },
        removeTodo: (state,action) => {
            state.tasks = state.tasks.filter( task => task.id !== action.payload.id)
        },
        changeDate: (state, action) => {
            state.date = action.payload.date
        }
    }
})

export const { addTodo, toggleTodo, removeTodo, changeDate } = tasksSlice.actions;

export default tasksSlice.reducer;