import React from 'react'
import { useReducer } from 'react';

const intialstate = 0;
const reducer = (state, action) => {

    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "res":
            return state = 0;

        default:
            return state;
    }


}



const UseReducerHooks = () => {

    const [state, dispatch] = useReducer(reducer, intialstate);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "inc" })}> increment</button>
            <button onClick={() => dispatch({ type: "dec" })}> decrement</button>
            <button onClick={() => dispatch({ type: "res" })}> reset</button>


        </>
    )
}

export default UseReducerHooks;
