import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: 1, name: 'Jhon', email: 'a@b.com'},
    {id: 2, name: 'Anne', email: 'b@b.com'},
    {id: 3, name: 'Dan', email: 'c@b.com'},
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        addPrepare:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name, email){
                const id = Date.now()
                return {payload: {id, name, email}}
            }
        }
        
    }
})

export const { add, addPrepare } = usersSlice.actions;

export default usersSlice.reducer;