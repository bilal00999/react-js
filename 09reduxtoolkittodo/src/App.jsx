import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1 className="bg-orange-700 test-3xl">use redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
