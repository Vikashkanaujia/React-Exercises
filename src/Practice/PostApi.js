import axios from 'axios'
import React, { useState, useEffect } from 'react'

const PostApi = () => {
    // https://jsonplaceholder.typicode.com/posts
    const [datas, setDatas] = useState([]);
    const[name,setName] = useState("");
    const postData = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: name,
            age: 26,
            title: "Hello vikash i amfrom post method",
            hobbies: ["Poetry", "Cooking", "Traveling", "Coding"]
        })
        .then((result) => { console.log(result.data) })
        .catch((err) => console.log(err))
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => { setDatas(result.data);})
        .catch((err) => console.log(err))
        
    }, []) 
    return (
        <div className='app'>
            <div>
                {
                    datas.map((data) => {
                        return <div key={data.id}> {data.name} </div>
                            {/* <button onClick={() => updateData(data.id)}>Update</button></> */}
                })
            }
            </div>

            <input type='text' placeholder='name' onChange = {(e)=>setName(e.target.value)}/>

            <button onClick={postData}> Post </button>

        </div>
    )
}

export default PostApi