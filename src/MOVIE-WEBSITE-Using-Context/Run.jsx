import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
import SingleMobie from './SingleMobie';
import { AppProvider } from './context';
import './movie.css';


const Run = () => {
    return (
        <>
            {/* css baaki hai ikas */}
            <AppProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie/:id' element={<SingleMobie />} />
                    <Route path='*' element={<Error />} />

                </Routes>
            </AppProvider>
        </>
    )
}

export default Run
