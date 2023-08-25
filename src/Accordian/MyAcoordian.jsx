import React, { useState } from 'react';




const MyAcoordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>

            <div className='main_heading'>
                <h1 onClick={() => setShow(!show)} > {show ? "-" : "+"}  </h1>
                <h3>{question}</h3>

            </div>
            {show && <p className='answer'>{answer}</p>}
        </>
    )
}

export default MyAcoordian;
