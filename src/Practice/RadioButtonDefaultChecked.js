import React, { useState } from 'react'

const RadioButtonDefaultChecked = () => {
    const [options] = useState([
        "Laptop",
        "Mobile",
        "Tablet",
        "Mouse",
        "Desktop",
        "Monitor",
        "CPU",
    ])
    const [selectedValue, setSelectedValue] = useState('Mouse');
    const handleChecked =(e)=>{
        setSelectedValue(e.target.value);

    }


    return (
        <>
            <div>Radio Button Default Checked</div>
            {
                options.map((option, index) => {
                    return (
                       
                        <div>
                            <label key={index} htmlFor={index} >
                                <input type="radio"
                                    id={index}
                                    value={option}
                                    checked = {selectedValue === option}
                                    onChange={handleChecked}
                                />
                                {option}
                            </label>
                        </div>                       
                    )
                })

            }
            <pre>Selected Value: {selectedValue}</pre>
        </>
    )
}

export default RadioButtonDefaultChecked