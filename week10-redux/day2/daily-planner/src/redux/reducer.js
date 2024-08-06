export const ADD_TASK = 'add_task'
export const DELETE_TASK = 'delete_task'
export const COMPLITED_TASK = 'complite_task'
export const EDIT_TASK = 'edit_task'
export const TOGGLE_EDIT = 'toggle_edit'

const initialState = {
    tasks: [
        { id: 0, name: 'Daily Challenge', isComplited: false, date: '2024-08-05', toggleEdit: false },
    ]
}


export const plannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = [...state.tasks]
            newTask.push({ id: Date.now(), name: action.name, isComplited: false, toggleEdit: false, date: action.date })
            return { ...state, tasks: newTask }

        case DELETE_TASK:
            const notDeleted = state.tasks.filter(task => task.id !== action.id)
            return { ...state, tasks: notDeleted }

        case COMPLITED_TASK:
            const complitedTask = state.tasks.map(task => {
                if (task.id === action.id) return { ...task, isComplited: !task.isComplited }
                return task
            })
            return { ...state, tasks: complitedTask }
        case EDIT_TASK:
            const changeName = state.tasks.map(task => {
                if (task.id === action.id) return { ...task, name: action.name,toggleEdit: !task.toggleEdit }
                return task
            })
            return { ...state, tasks: changeName }

        case TOGGLE_EDIT:
            const toggleEdit = state.tasks.map(task => {
                if (task.id === action.id) return { ...task, toggleEdit: !task.toggleEdit }
                return task
            })
            return {...state,tasks:toggleEdit}

        default:
            return state
    }
}