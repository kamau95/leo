import { useState } from 'react'

import './App.css'

function App( ) {
  const [count, setCount] = useState(0)
const handleClick= ( )=>{
  setCount( prevCount=>prevCount+1)
}
  return (
    <div className="App">
      <h1>the current count is {count} </h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App 
