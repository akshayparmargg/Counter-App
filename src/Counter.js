import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  // Define the counter state variable and its setter function
  const [count, setCount] = useState(0);

  // Event handler for incrementing the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the counter
  const decrement = () => {
    // Added a condition that prevents the counter from going below 0 into negative figures
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="score">{count}</h1>
      {/* Button to decrement the counter */}
      <button className="button" onClick={decrement}>
        MINUS -
      </button>
      {/* Button to increment the counter */}
      <button className="button" onClick={increment}>
        PLUS +
      </button>
    </div>
  );
}

export default Counter;
