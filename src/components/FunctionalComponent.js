import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
        Minus
      </button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </div>
  );
}

export default FunctionalComponent;
