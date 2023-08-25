import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState();


    const input = (event) => {

        const data = event.target.value
        console.log(data)
        setImg(data);

    }
    return (
        <>
            <div className='input_2'>
                <h1>this is used for searching</h1>

                <input type='text'
                    value={img}
                    placeholder='Search Anything'
                    onChange={input}


                />
                {img === "" ? null : <Sresult text={img} />}
            </div>
        </>
    )
}

export default Search;
