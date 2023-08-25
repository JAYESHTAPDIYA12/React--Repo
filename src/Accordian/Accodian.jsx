import React, { useState } from 'react';
import question from './Questions';
import MyAcoordian from './MyAcoordian';
import '../Accordian/Accordian.css';


const Accodian = () => {
    const [data, setData] = useState(question);

    return (
        <div>
            <section className='main_div'>
                <h1>React Interview question</h1>
                {data.map((curr) => {
                    return <MyAcoordian key={curr.id} {...curr} />
                })}
            </section>
        </div>
    )
}

export default Accodian;
