import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComp = () => {
    const counter = useSelector(state => state.counter);

    return (
        <div>
            Counter: {counter}
        </div>
    )
}
