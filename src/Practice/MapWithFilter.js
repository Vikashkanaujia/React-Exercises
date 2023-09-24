import React from 'react'
import { useEffect , useState } from 'react';
const MapWithFilter = () => {
    const [users, setUsers] = useState([]);
    const [numbers , setNumbers] = useState([1,2,3,4,5,6,7,8,9]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => setUsers(json));
        
    }, []);
    const mapData = () => {
        // <---  Only Filter function is use --->

            let filterArray = users.filter((user)=>{
                //  return user.name === "Leanne Graham";
                //  return user.name.includes("a");
                 return user.id<=5;

            });
            setUsers(filterArray)




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
            <button onClick={mapData}>Filter Data</button>
        </div>
    )
}

export default MapWithFilter;