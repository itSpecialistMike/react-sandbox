import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => (item.id !== action.payload.id))
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(item => item.id === action.payload.id);
            state.todos[index] = action.payload;
        }
    },
})

export const { addTodo, deleteTodo , updateTodo} = todoSlice.actions;

export default todoSlice.reducer;

