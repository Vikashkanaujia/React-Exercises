import React from 'react'
import { useEffect, useState } from 'react';
const FilterWithNumber = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    useEffect(() => {

        // <-- Filter use with map  -->
        let filterNumber = numbers.filter((number) => {
            return number <= 5;
        }).map((filtered) => { return filtered * filtered });

        setNumbers(filterNumber);
    }, []
    );
    return (
        <div className='app'>
            <h1>Users</h1>
            <div className='card'>
                {
                    numbers.map((number) => {
                        return (
                            <div key={number} className='card-inner'>
                                <p>{number}</p>

                            </div>
                        )
                    })
                }

            </div>
            <button >Filter Data</button>
        </div>
    )
}

export default FilterWithNumber