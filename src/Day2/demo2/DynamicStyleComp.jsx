import { useState } from "react"

export const DynamicStyleComp =() =>{
    const [color,setColor] = useState('blue');
    const [scale, setScale] = useState(1);
    const changeColor = () => {
        setColor(color === 'blue'? 'green' : 'blue');
    }
    const changeScale = () => {
        scale == "1"? setScale("1.5") : setScale("1");
    }
    return (
        <div>
            <button style={{color: color}} onClick={changeColor}>Change color</button>
            <button style={{scale: scale}} onClick={changeScale}>Change scale</button>
        </div>
    )
}