import React, { useState } from "react";
import './style.css';
const Task3 = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const swap = () => {
        let value = inputValue;
        setInputValue(inputValue2);
        setInputValue2(value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(selectedOption === 'option1');
    };


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        handleCheckboxChange();
    };

    return (
        <div id="mainDiv">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="first value" /> <br />
            <input type="text" value={inputValue2} onChange={handleInputChange2} placeholder="second value" /> <br />

            <div>{inputValue}</div> <br />
            <div>{inputValue2}</div> <br />

            <button onClick={swap}>Swap</button>
            <div className="checkbox-container">
                <input type="checkbox" className="checkbox-input" checked={isChecked} readOnly/>

                <p className="checkbox-label">Checked: {isChecked ? 'Yes' : 'No'}</p>

            </div>

            <input type="radio" id="option1" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />

            <input type="radio" id="option2" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
        </div>
    )
}

export default Task3;

