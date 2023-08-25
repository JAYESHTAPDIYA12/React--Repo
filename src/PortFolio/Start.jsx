import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Error from './Error'
import Login from './Login'


const Start = () => {
    const [isAuthUser, setIsAuthUser] = useState(localStorage.getItem('email') ? true : false)

    return (
        <>


            <div className=' container'>
                <Routes>
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

                    <Route path='' element={isAuthUser ? (
                        <Layout />
                    ) : (
                        <Navigate
                            to={"/login"}

                        />
                    )}>
                        <Route path='/home' element={isAuthUser ? (
                            <Home />
                        ) : (
                            <Navigate
                                to={"/login"}

                            />
                        )} />
                        <Route path='/about' element={isAuthUser ? (
                            <About />
                        ) : (
                            <Navigate
                                to={"/login"}

                            />
                        )} />  <Route path='/service' element={isAuthUser ? (
                            <Service />
                        ) : (
                            <Navigate
                                to={"/login"}

                            />
                        )} />  <Route path='/contact' element={isAuthUser ? (
                            <Contact />
                        ) : (
                            <Navigate
                                to={"/login"}

                            />
                        )} />
                        {/* <Route path='/about' element={<About />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/contact' element={<Contact />} /> */}
                        <Route path='*' element={<Error />} />

                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Start








