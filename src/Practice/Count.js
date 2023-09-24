import React, { useState } from 'react'

const Count = () => {
  let [count,setCount]=useState(0)
  const incrementFun = () =>{
        setCount(count+1);
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1>{count}</h1>
        <button onClick={incrementFun}>Increment the count</button>
      </div>
        
    </div>
  )
}

export default Count;