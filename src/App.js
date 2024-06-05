import React from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <section className="App">
      <h1>Counter App</h1>
      <Counter />
      <p>
        This simple counter app was built in React using useState and
        eventHandlers to update state and increment/decrement by 1.
      </p>
      <p className="repo">
        <a href="https://github.com/akshayparmargg/Counter-App/tree/main">
          Git Repo
        </a>
      </p>
    </section>
  );
}

export default App;
