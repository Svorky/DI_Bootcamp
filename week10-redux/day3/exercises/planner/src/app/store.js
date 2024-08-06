import {configureStore} from "@reduxjs/toolkit"

import tasksReducer from '../features/tasks/tasksSlice.js'

export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})