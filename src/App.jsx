import { useState } from 'react';
import './App.css';
import Prev from './Prev';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(87);

  //handling state zero
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  //function to update myarray

  return (
    <div className="App">
      <>
        <Prev />
        <div>
          <button onClick={handleClick}>Click Me</button>
          <h1>the current count is {count} </h1>
          <button onClick={handleDecrement}>Click Me</button>
        </div>
        <div>
          <button onClick={() => setValue(value + 1)}>+</button>
          <h1>the value is {value}</h1>
          <button onClick={() => setValue(value - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setValue(87)}>Reset</button>
        </div>
      </>
    </div>
  );
}

export default App;
