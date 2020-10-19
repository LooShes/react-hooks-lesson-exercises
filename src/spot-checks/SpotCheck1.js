import React from 'react'
import { useState } from 'react';

export default function SpotCheck1() {
  const [counter, setCounter] = useState(1)
  
  const addNumber = () => setCounter(counter + 1)
  const subtractNumber = () => setCounter(counter - 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
          <p>{counter}</p>
          <button onClick={addNumber}>Increase</button>
          <button onClick={subtractNumber}>Decrease</button>
      </div>
    </div>
  )
}