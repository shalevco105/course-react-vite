import React from "react";
import './Phones.css';
const PhonesComp = (props) => {
    let {phones} = props;
    const handleButtonClick = () => {
        console.log(phones);
    };
    return (
        <div>
           <ul>
            <li>Home Phone: {phones.homePhoneNumber}</li>
            <li>Work Phone: {phones.mobilePhoneNumber}</li>
            <li>Cell Phone: {phones.faxPhoneNumber}</li>
           </ul>
            <div>
                <button id="printPhoneDataButton" onClick={handleButtonClick}>Print Phone Data To Console</button>
            </div>
        </div>
    )
};

export default PhonesComp;