import { createSlice, nanaoid } from "@reduxjs/toolkit"

const initialState = { todos: [{ id: 1, text: {people} }] }

export const todoSlice = createSlice({
    name: "todo", initialState, reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanaoid (),
                text: action.payload
        }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
        state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})
export const { addTodo, removeTodo } = todoSlice.actions;