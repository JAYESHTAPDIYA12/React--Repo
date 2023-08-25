import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [pass, setPass] = useState('');


    const re = (event) => {
        setPass(event.target.value)
    }
    const yes = () => {
        console.log('============', pass)
        if (pass != '') {
            localStorage.setItem('user', pass)
        }

        {
            pass != '' ? navigate("/home") : navigate("/login")
        }
        // navigate("/home")

    }

    useEffect = () => {

        localStorage.getItem('user') ? navigate("/home") : navigate("/login")
    }


    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">UserId</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" >We'll never share your UserId with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={re} required />
                </div>

                <button className="btn btn-primary" onClick={yes} >Submit</button>
            </form>


        </>
    )
}

export default Login
