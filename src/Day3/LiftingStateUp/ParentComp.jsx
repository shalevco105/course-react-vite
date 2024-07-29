import { useState } from "react"
import ChildComp from "./ChildComp";

const ParentComp = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);
    const changeArray = (number) => {
        setNumbers([...numbers, number]);
    }
    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background:"#f094dc57", borderRadius: "15px"}}>
            <h3> ParentComp </h3>
            <div>
                {/* Lifting State up */}
                <ChildComp numbers={numbers} func1={changeArray} />
            </div>
        </div>
    )
}

export default ParentComp;
