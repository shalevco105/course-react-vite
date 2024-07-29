import React, { useState } from "react";
import './style.css';
const Task4 = () => {
    const [inputValue, setInputValue] = useState('');
    const [isChecked, setIsChecked] = useState([false, false, false]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const inputClass = inputValue.length < 5 ? 'red-background' : 'blue-background';

    const handleCheckboxChange = () => {
        setIsChecked([!isChecked[0], !isChecked[1], !isChecked[2]]);
    };

    return (
        <div id="mainDiv">
            <input class={inputClass} type="text" value={inputValue} onChange={handleInputChange} placeholder="twitty witty" /> <br />
            <input type="checkbox" id="blue" className="checkbox-input" onClick={false} />
            <input type="checkbox" id="green" className="checkbox-input" onClick={true} />
            <input type="checkbox" id="red" className="checkbox-input" onClick={true} />
            <ul>
                {isChecked.map((checked, index) => (
                    <li key={index}>{checked ? 'Checked' : 'Unchecked'}</li>
                ))}
            </ul>
        </div>
    )
}

export default Task4;

