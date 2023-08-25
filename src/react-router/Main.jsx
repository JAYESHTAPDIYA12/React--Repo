import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Shop from './Shop';
import Contact from './Contact';
import Error from './Error';
import Layout from './Layout';
import User from './User';
import Search from './Search';


// main wali file ko <browserTRouter ke throung render kar wa do in index.jsx

const Main = () => {
    return (

        <>

            {/* <BrowserRouter> */}
            <Routes>
                <Route path='' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/search' element={<Search />} />


                    <Route exact path='/user' element={<User />} />
                    <Route path='/user/:name/:age' element={<User />} />
                    <Route path="*" element={<Error />} />


                </Route>


            </Routes>
            {/* </BrowserRouter> */}


        </>

    );
}

export default Main;

