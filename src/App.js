import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  let color = '#fff';
  if (count >= 1) {
    color = 'green';
  } else if (count < 0) {
    color = 'red';
  } else {
    color = 'white';
  }
  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all">
        <h1 className="--text-light">React Counter App</h1>
        <p className="count --my2 --text-md --text-light --fw-bold" style={{ color: color }}>{count}</p>
        <div className="buttons">
          <button className="--btn --btn-danger" onClick={decrease}>- Substract</button>
          <button className="--btn" onClick={reset}>! Reset</button>
          <button className="--btn --btn-success" onClick={increase}>+ Add</button>
        </div>
      </div>
    </section>
  );
}

export default App;
