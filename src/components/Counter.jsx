import React from "react";
import { counterContext } from "./AuthContext";
import { useContext } from "react";

const Counter = () => {
  const [count, increment] = useContext(counterContext);
  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
};

export default Counter;
