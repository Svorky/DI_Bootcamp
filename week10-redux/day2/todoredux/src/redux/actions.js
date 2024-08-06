export const ADD ='ADD'
export const DELETE ='DELETE'
export const UPDATE ='UPDATE'

export const addTask = ({name}) =>{
    return {
        type: ADD,
        name
    }
};

export const deleteTask = ({id}) =>{
    return {
        type: DELETE,
        id,
    }
};

export const updateTask = ({id}) =>{
    return {
        type: UPDATE,
        id,
    }
}