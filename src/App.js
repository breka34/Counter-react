import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  const [isRed, setRed] = useState(true);
  

  const increment = () => {
     setCount(count +1);
   
  }
  const decrament = () => {
    setCount(count -1);
  }
  const Reset = () => {
   const countt = 0;
  setCount(countt)
  }
  return (
    <div className="app">
    <div className="content">
    <h1>Counter</h1>
    <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrament}>Decrament</button>
      <button className="reset" onClick={Reset}>Reset</button>
      
      </div>
    </div>
  )
}

export default App
