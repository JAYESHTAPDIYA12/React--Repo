import React from 'react'
import Movies from './Movies'
import Search from './Search';
import CopyWrite from './CopyWrite';

const Home = () => {

    return (
        <>
            <div className='border'>
                <br />

                <Search />
                <br />
                <br />
                <hr />
                <Movies />
                <br />

            </div>
            <br />
            <CopyWrite />


        </>
    )
}

export default Home;




