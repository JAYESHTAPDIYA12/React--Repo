import React, { useState } from "react";

const Click2 = () => {
  const state = useState();
  let [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count++);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Inc}>Click me</button>
    </div>
  );
};

export default Click2;
