import { useDispatch } from "react-redux"

export const DecComp = () => {
    const dispatch = useDispatch();
    const setCounterStore = () => {
        dispatch({ type: "DEC" })
    }
    return (
        <div>
            <button onClick={setCounterStore}>Decrement</button>
        </div>
    )
}

export default DecComp;