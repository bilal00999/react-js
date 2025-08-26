import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const read = useSelector((state) => state.value);

  return (
    <>
      <h1>redux counter app</h1>
      <h2>counter:{read} </h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset(5))}>reset</button>
    </>
  );
}

export default App;
