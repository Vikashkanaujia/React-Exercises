import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const DeleteApi = () => {
    const [datas, setDatas] = useState([]);

    function DeleteData(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((result) => { console.log("delete") })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then((result) => { setDatas(result.data); })
            .catch((err) => console.log(err))

    }, [])
    return (
        <div className='app'>
            <div>
                {
                    datas.map((data) => {
                        return (
                            <div key={data.id}> {data.name}

                                <button onClick={() => DeleteData(data.id)}>delete</button>
                            </div>
                        )
                    })
                }
            </div>



            {/* <button onClick={postData}> Post </button> */}

        </div>
    )
}
export default DeleteApi;