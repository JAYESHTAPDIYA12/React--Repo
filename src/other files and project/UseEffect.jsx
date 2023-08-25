import React, { useEffect, useState } from 'react';


const UseEffect = () => {
    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState(0);


    useEffect(() => {
        document.title = `you have clicked me ${count} times`;
    })


    return (
        <div>
            <button onClick={() => {
                return (
                    setCount(count + 1)
                )
            }}>
                Click Me {count}
            </button>

            <br />
            <br />
            <button onClick={() => {
                return (
                    setCount1(count1 + 1)
                )
            }}>
                Click Me {count1}
            </button>
        </div>
    )
}

export default UseEffect;
