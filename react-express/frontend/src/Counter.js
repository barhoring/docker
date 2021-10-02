import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => {
        debugger;
        return res.json();
      })
      .then((res) => setCounter(res));
  });
  return (
    <div>
      <h1>Counter</h1>
      <div>{counter}</div>
    </div>
  );
};

export default Counter;
