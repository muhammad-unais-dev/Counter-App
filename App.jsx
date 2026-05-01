import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
 const reset = () => setCount(0);

 // Form Submit Function

 const handleSubmit = (e) => {
  e.preventDefault();
   setCount(Number(inputValue));
   setInputValue("");
 }
  return (
    <div className="app">
      <h1>React Counter App</h1>
      {/* Form Handling */}
      <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Enter Numer" value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}/>
      <button type="submit">Set Counter</button>
      </form>

      {/* Passing props to child */}
      <Counter 
        count={count} 
        onIncrement={increment} 
        onDecrement={decrement} 
        onReset = {reset}
      />
    </div>
  );
}

export default App;