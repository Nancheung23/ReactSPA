import React from "react"
import { useDispatch } from 'react-redux'

const Button = (props) => {
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    return (
        <div>
            <p>Click Couter: <strong>{props.click}</strong></p>
            <button onClick={increment}>+1</button>
            <button onClick={props.handleClick}><strong>{props.text}</strong></button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}

export default Button