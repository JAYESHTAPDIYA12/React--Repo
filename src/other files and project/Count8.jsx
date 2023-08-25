import React, { useState } from 'react';

const Count8 = () => {

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (count != 0) {
            setCount(count - 1);

        }
        if (count === 0) {
            alert("reached to zero no futher decrement!!!")
        }

    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

export default Count8;
