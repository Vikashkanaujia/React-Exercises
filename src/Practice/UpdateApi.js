import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const UpdateApi = () => {

    // https://jsonplaceholder.typicode.com/posts

    const [datas, setDatas] = useState([]);
    const [name, setName] = useState("");
    function updateData(id) {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name: name
        })
            .then((result) => { console.log(result.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => { setDatas(result.data); })
            .catch((err) => console.log(err))

    }, [])
    return (
        <div className='app'>
            <label>Name <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} /></label>
            <div>
                {
                    datas.map((data) => {
                        return <>
                            <div key={data.id}> {data.name}
                                <button onClick={() => updateData(data.id)}>Update</button></div>
                        </>
                    })
                }
            </div>



            {/* <button onClick={postData}> Post </button> */}

        </div>
    )
}

export default UpdateApi