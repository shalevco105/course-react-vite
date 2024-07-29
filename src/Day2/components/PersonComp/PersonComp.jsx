import React, { useState } from "react";
import PhonesComp from "../PhonesComp/PhonesComp.jsx";

const PersonComp = () => {

    let [counter, setCounter] = useState(0);

    let myObj = {
        homePhoneNumber: "123",
        mobilePhoneNumber: "05444",
        faxPhoneNumber: "03545453"
    }

    const handleClick = () => {
        setCounter(counter + 1);
    }
    
    return (
        <div>
            <PhonesComp phones={myObj} />
            Counter : {counter}
            <div>
                <button onClick={handleClick}>Increment Counter</button>
            </div>
        </div>

    )
};

export default PersonComp;