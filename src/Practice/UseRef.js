import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

    let inputRef = useRef(null)
    let formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle");
        inputRef.current.value='macccc'
        inputRef.current.style.color = "red"
        // formRef.current.reset();

        

    }
    const handleinput = () => {

        inputRef.current.value='macccc'
        inputRef.current.style.color = "red"
    }

    return (

        <div>



            <form ref={formRef} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={inputRef} name="name" />
                </label><br /><br />
                <label>
                    Email:
                    <input type="email" ref={inputRef} name="email" />
                </label><br /><br />
                <button type="submit">Reset</button>
            </form>


            <button onClick={handleinput}>color</button>



        </div>
    )
}

export default UseRef