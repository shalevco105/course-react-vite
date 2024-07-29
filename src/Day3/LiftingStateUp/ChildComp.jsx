import React, { useState } from "react"

const ChildComp = ({ numbers, func1 }) => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>
                {numbers.map((x, index) => {
                    return (<p key={index}> {x} </p>)
                })}
            </div>
            <div>
                <input type="text" placeholder="type a great number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={() => { func1(+number); setNumber(""); }}>Add Number</button>
            </div>
        </div>
    )
}

export default ChildComp;