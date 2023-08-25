import React, { useState } from 'react';

const EventHandlig5 = () => {

    const purple = "purple"
    const [bg, setBg] = useState(purple)
    const [fname, setFname] = useState("Click Me")

    const bgChange = () => {
        const yellow = "yellow";
        setBg(yellow);
        setFname("Good!!")

    }
    const bgChange2 = () => {
        const blue = "blue";
        setBg(blue);
        setFname("verynice")
    }

    return (
        <div style={{ backgroundColor: bg }} >
            <button onClick={bgChange} onDoubleClick={bgChange2}>{fname}</button>
        </div>
    )
}

export default EventHandlig5;
