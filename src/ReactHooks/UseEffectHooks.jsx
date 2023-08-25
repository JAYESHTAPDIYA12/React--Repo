import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {

    const [count, setCount] = useState(window.screen.width)

    const size = () => {
        setCount(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', size)
        return () => {
            window.removeEventListener('resize', size)
        }
    })

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default UseEffectHooks;
