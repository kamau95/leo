import React, { useState } from 'react';

function Prev() {
  const [count, setCount] = useState(0);
  const updateCounter = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div>
      <button onClick={updateCounter}>plus on the counter</button>
      <h1>the count is {count}</h1>
    </div>
  );
}

export default Prev;
