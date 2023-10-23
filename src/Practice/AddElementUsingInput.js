import React, { useState } from 'react'

const AddElementUsingInput = () => {
    const [value , setValue] = useState('')
    const [items ,setItems] = useState(["apple","mongo"])
    const AddItem=()=>{
        setItems([...items , value]);
        setValue("");
    }
  return (
    <div>

        <input type='text' placeholder='Enter fruit Name' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={AddItem}>Add item</button>
        <div>
            {
                items.map((name,id)=>{
                    return(
                        <p key={id}>
                            {name}
                        </p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AddElementUsingInput