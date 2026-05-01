function Counter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div className="counter-box">
      <h2>Count: {count}</h2>

      <div className="buttons">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        </div>
        <button className="reset-btn" onClick={onReset}>Reset</button>
  
    </div>
  );
}

export default Counter;