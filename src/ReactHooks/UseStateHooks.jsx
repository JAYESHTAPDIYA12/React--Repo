import React, { useState } from 'react';

const UseStateHooks = () => {

    const bio = [
        {
            id: 0, name: "jayesh", age: 25
        },
        {
            id: 1, name: "tapdiya", age: 25
        }
    ]
    const [val, setVal] = useState(bio);

    const clear = () => {
        setVal([])
    }

    const removeElement = (id) => {
        // alert(id)
        const val1 = val.filter((arrCurr) => { return arrCurr.id !== id })
        setVal(val1)
    }
    return (
        <>
            {
                val.map((currEle, id) => {
                    return (
                        <>
                            <h1 key={currEle.id} >Name: {currEle.name} & Age: {currEle.age}
                                <button onClick={() => { removeElement(currEle.id) }} >remove</button>
                            </h1>

                        </>
                    )
                })
            }
            <button onClick={clear}>click me</button>
        </>
    )
}

export default UseStateHooks;
