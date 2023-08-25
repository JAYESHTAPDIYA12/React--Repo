import React from 'react';

const Sresult = (props) => {
    const img1 = `https://source.unsplash.com/400x350/?${props.text}`;

    return (
        <>
            <div>
                <img src={img1} alt='search' />
            </div>
        </>
    )
}

export default Sresult;
