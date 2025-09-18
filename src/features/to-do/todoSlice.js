import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(item => (item.id !== action.payload.id))
        },
        updateTodo: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload.id);
            state.value[index] = action.payload;
        }
    },
})

export const { addTodo, deleteTodo , updateTodo} = todoSlice.actions;

export default todoSlice.reducer;

