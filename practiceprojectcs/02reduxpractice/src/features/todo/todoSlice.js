import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { text: action.payload.text } : todo
      );
    },
    isCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, isCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
