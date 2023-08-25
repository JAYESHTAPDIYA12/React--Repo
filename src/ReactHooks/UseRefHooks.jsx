import React, { useRef, useState } from 'react'

const UseRefHooks = () => {

    const name = useRef(null);

    const [show, setShow] = useState(false);

    const formsubmit = (e) => {
        e.preventDefault();
        const r = name.current.value
        r === "" ? alert("fill the data") : setShow(true)
        console.log(r)


    }
    return (
        <>
            <form onSubmit={formsubmit}>
                <label htmlFor='name'>Enter your name</label>
                <br />
                <br />

                <input type='text' id='name' ref={name} />
                <br />
                <br />

                <button>submit</button>

            </form>

            <h1>{show ? `your name is ${name.current.value}` : ''}</h1>
        </>
    )
}

export default UseRefHooks;
