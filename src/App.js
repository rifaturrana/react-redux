import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increament = () => {
    // dispatch({ type: "INC" });
    dispatch(actions.increament());
  };
  const decreament = () => {
    // dispatch({ type: "DEC" });
    dispatch(actions.decreament());
  };

  const addBy = () => {
    // dispatch({ type: "ADD", payload: 10 });
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
