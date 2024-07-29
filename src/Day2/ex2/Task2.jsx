import React, { useState } from "react";

const Task2 = () => {
    const [number, setNumber] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const sum = () => {
        setNumber(number + Number(inputValue));
    };

    return (
        <div>
            <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Enter a number" /> <br />

            <button onClick={sum}>Sum</button>
            <text> {number}</text>
        </div>
    )
}

export default Task2;

