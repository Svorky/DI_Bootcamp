import { ADD, DELETE, UPDATE } from './actions'

const initialState = {
    tasks: []
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newtasks = [...state.tasks]
            newtasks.push({ id: Date.now(), name: action.name, isComplited: false })
            return { ...state, tasks: newtasks }
        case DELETE:
          return {...state, tasks: state.tasks.filter( task => task.id !== action.id)}
        case UPDATE:
            const updateTasks = [...state.tasks]
            const task = updateTasks.findIndex( task => task.id === action.id)
            updateTasks[task] = {...updateTasks[task], isComplited: !updateTasks[task].isComplited}
            return { ...state, tasks: [...updateTasks] }
        default:
            return state
    }
}