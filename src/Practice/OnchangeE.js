import React, { useState } from 'react'

const OnchangeE = () => {
    let [message,setMessage] = useState("");
   const getInput=(e)=>{
        setMessage(e.target.value);
    }
  return (
    <div className='app'>
        <input onChange = {getInput} name={message} placeholder='type something'/>
        <h3>{message}</h3> 
    </div>
  )
}

export default OnchangeE