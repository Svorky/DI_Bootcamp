import { createSlice } from '@reduxjs/toolkit';

// const initialState = []

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            const categories = state.map(s => s.name);
            if(!categories.includes(action.payload.name)) {
                state.push({ ...action.payload });
            }
        },
        deleteCategory: (state, action) => {
            return state.filter(category => category.name !== action.payload);
        },
        editCategory: (state, action) => {
            return state;
        }
    }
});

export const { addCategory, changeStatus, deleteCategory, editCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;