import React,{useState,useEffect} from 'react'
import useCounter from '../Hooks/useCounter'

function Counter() {
    const [count, increment,decrement,reset] = useCounter()
  return (
    <div>
        <h1> Count - {count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}> Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Counter
