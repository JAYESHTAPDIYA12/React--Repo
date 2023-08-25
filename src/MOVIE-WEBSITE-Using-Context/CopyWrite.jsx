import React from 'react';

const CopyWrite = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer>
                <br />
                <h1 className='text-center fw-semibold fs-4 text-xxl-en   '>
                    Jayesh Tapdiya CopyWrite © {year}
                </h1>
            </footer>
        </>
    )
}

export default CopyWrite;
