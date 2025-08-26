import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  isCompleted,
} from "../features/todo/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // track which todo is editable
  const [editableId, setEditableId] = useState(null);
  const [todoMsg, setTodoMsg] = useState("");

  const handleEdit = (todo) => {
    if (!todo.completed) {
      // only allow edit if not completed
      setEditableId(todo.id);
      setTodoMsg(todo.text);
    }
  };

  const handleSave = (id) => {
    if (todoMsg.trim() !== "") {
      dispatch(updateTodo({ id, text: todoMsg }));
    }
    setEditableId(null); // exit edit mode
    setTodoMsg("");
  };

  return (
    <div id="show_todo_list">
      {todos.map((todo) => (
        <div id="todo" key={todo.id}>
          <div id="todo_left">
            <input
              type="checkbox"
              id="todo_left_checkbox"
              onChange={() => dispatch(isCompleted(todo.id))}
              checked={todo.completed}
            />

            {editableId === todo.id ? (
              <input
                id="todo_left_input"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
              />
            ) : (
              <p
                id="todo_left_para"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "gray" : "black",
                }}
              >
                {todo.text}
              </p>
            )}
          </div>

          <div id="todo_right">
            {/* Delete only if not completed */}
            <i
              className={`fa-solid fa-trash ${
                todo.completed ? "disabled" : ""
              }`}
              id="delete_icon"
              onClick={() => !todo.completed && dispatch(deleteTodo(todo.id))}
              style={{ cursor: todo.completed ? "not-allowed" : "pointer" }}
            ></i>

            {editableId === todo.id ? (
              <button onClick={() => handleSave(todo.id)}>Save</button>
            ) : (
              <i
                className={`fa-solid fa-pen-to-square ${
                  todo.completed ? "disabled" : ""
                }`}
                id="edit_icon"
                onClick={() => handleEdit(todo)}
                style={{ cursor: todo.completed ? "not-allowed" : "pointer" }}
              ></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
