import {useState} from "react";

const ParentComp = () => {
    const [flag, setFlag] = useState(false);
    const showHideHandler = () => {
        setFlag(!flag);
    };
    return (
        <div>
            <button onClick={showHideHandler}> SHOW / HIDE </button>
            {
                flag && <p>NOW YOU SEE ME</p>
            }

        </div>

    )
};

export default ParentComp;
