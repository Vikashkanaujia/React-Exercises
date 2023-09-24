import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Debouncing = () => {
    const [pin,setPin] = useState("");
    const [data,setData] = useState("");
    const debouncing=()=>{
        axios.get(`https://api.postalpincode.in/pincode/${pin}`)
        .then((res)=>setData(res.data[0].PostOffice[1].Name ))
        .catch((err)=>console.log(err.messeges))

    }
    useEffect(()=>{
        const getData=setTimeout(()=>{
            debouncing();
        },3000)
        return () => clearTimeout(getData)
    },[pin]);
  return (
    <div>
        <h2>{data}</h2>
        <input type='text' placeholder='PinCode' onChange={(e)=>setPin(e.target.value)}/>
    </div>
  )
}

export default Debouncing