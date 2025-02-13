import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './context/CounterContext';
const Counter = () => {
    const counterContext=useContext(CounterContext);
  return (
    <div>
      <button onClick={()=>counterContext.setCount(counterContext.count+1)}>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default Counter
