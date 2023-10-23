import React from 'react'

const Props = ({name , changeName}) => {
  return (
    <div className='app'>
        <h1>Child Component</h1>
        
        <h3>{name}</h3>
        <button onClick={()=>{changeName("Hello vikash i am from parent component")}}>Change name from child</button> 
 
    </div>
  )
}

export default Props