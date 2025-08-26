import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const Dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    Dispatch(addTodo(todo));
  };
  return (
    <>
      <form action="" onSubmit={addTodoHandler}>
        <div id="add_todo_main">
          <input
            type="text"
            placeholder="write todo..."
            id="todo_input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button id="addtodo_btn" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
