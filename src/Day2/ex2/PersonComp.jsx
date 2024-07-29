import React, { useState } from "react";

const PersonComp = () => {
    const [people, setPeople] = useState([{ fname: 'Maya', age: 23 }, { fname: 'Dana', age: 6 }]);
    const swap = () => { 
        setPeople([...people].reverse());
    };
    return (
        <div>
            <span>Name: {people[0].fname}</span>
            <button onClick={swap}>Swap</button>
        </div>
    )
}

export default PersonComp;

