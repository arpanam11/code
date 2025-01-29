import React from 'react'
import { useEffect, useState } from 'react'
const Counter = () => {
    const [counter, setCounter]= useState(0)
    const increase = ()=>{
        setCounter(counter+1)
   
     }
     const decrease = ()=>{
       setCounter(counter-1)
     }
  return (
    <div>  <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  
      {counter}</div>
  )
}

export default Counter