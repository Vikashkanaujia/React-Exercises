import React, { useState } from 'react'

const ChangeBtnColorOnclick = () => {
    const [btnColor, setBtnColor] = useState('btn-yello');
    const [isClick, setIsClick] = useState(true);

    const changeColor = () => {
        setBtnColor(btnColor === 'btn-yello' ? 'btn-pink' : 'btn-yello');
    }
    const changeColorByStyle = () => {
        setIsClick(!isClick);

    }

    return (
        <>
            <div>

                <h2>React Js Change Color button on Click</h2>
                <button onClick={changeColor} className={`btn  ${btnColor}`}>Change Color</button>
            </div>



            <div>

                <h2>React Js Change Color button on Click</h2>
                <button onClick={changeColorByStyle} style={{ backgroundColor: isClick ? '#00897B' : '#000fff' }}> Change Color</button>
            </div >
        </>
    )
}

export default ChangeBtnColorOnclick