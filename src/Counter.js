import React, { useState } from "react";

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
      <h1>Counter: {count}</h1>
      {/* Button to increment the counter */}
      <button onClick={increment}>Increment</button>
      {/* Button to decrement the counter */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
