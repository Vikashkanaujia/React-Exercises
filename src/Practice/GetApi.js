import React, { useEffect, useState } from 'react'
import axios from 'axios';
const GetApi = () => {
    const [datas,setDatas] = useState([]);
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{setDatas(result.data) ; console.log(result.data)})
        .catch((err)=>console.log(err))
       
    },[])
  return (
    <div>
        {
            datas.map((data)=>{
                return <div key={data.id}> {data.name} </div>
            })
        }
    </div>
  )
}

export default GetApi