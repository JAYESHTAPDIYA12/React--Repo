import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from '../react-router/Layout';
import Home from '../react-router/Home';
import Shop from '../react-router/Shop';
import Contact from '../react-router/Contact';
import Search from '../react-router/Search';
import User from '../react-router/User';
import Error from '../react-router/Error';
import Login from './Login'

const Main2 = () => {
    const [isAuthUser, setIsAuthUser] = useState(localStorage.getItem('user') ? true : false)


    return (
        <>
            <Routes>
                {/* <Route path='/login' element={<Login />} /> */}
                <Route
                    path="/login"
                    element={
                        !isAuthUser ? (
                            <Login />
                        ) : (
                            <Navigate
                                to={"/home"}

                            />
                        )
                    }
                />



                <Route path='' element={<Layout />} >
                    <Route index path={'/home'} element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/search' element={<Search />} />


                    <Route exact path='/user' element={<User />} />
                    <Route path='/user/:name/:age' element={<User />} />
                    <Route path="*" element={<Error />} />


                </Route>

            </Routes>
        </>
    )
}

export default Main2;
