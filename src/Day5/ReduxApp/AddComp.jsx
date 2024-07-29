import { useDispatch } from "react-redux"

export const AddComp = () => {
    const dispatch = useDispatch();
    const setCounterStore = () => {
        dispatch({ type: "INC" })
    }
    return (
        <div>
            <button onClick={setCounterStore}>Add</button>
        </div>
    )
}

export default AddComp;