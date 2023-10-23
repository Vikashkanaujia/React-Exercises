import React, { useState } from 'react'
import { useEffect } from 'react'
export const MapArray = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  const mapData= ()=>{
    let mapedArray = users.map((user)=>{
      return user.id * 2;
    })
    console.log(mapedArray);
  }
  return (
    <div className='app'>
      <h1>Users</h1>
      <div className='card'>
        {
          users.map((user) => {
            return (
              <div key={user.id} className='card-inner'>
                <p>{user.name}</p>
                <p>{user.username}</p>
              </div>
            )
          })
        }

      </div>
      <button onClick={mapData}>See Mapped Data</button>
    </div>
  )
}
