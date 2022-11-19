import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actions } from "../store";
export const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  // console.log(counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const backtohome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2 color="white">{counter}</h2>

      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={addBy}>Add by 10</button>
      <br />
      <button onClick={backtohome}>Back</button>
    </div>
  );
};
