import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      {count}
      <button onClick={() => setCount((count) => count - 1)}> - </button>
      <Counter/>
    </>
  );
}

export default App;
