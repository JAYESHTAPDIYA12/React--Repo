import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();


    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const yes = () => {
        if (email != "" && pass != "") {
            localStorage.setItem('email', email)
            localStorage.setItem('pass', pass)
            // navigate("/login")
            alert("hello if")
        }
        // else {
        //     alert("heloo else")
        //     navigate("/home")
        // }

    }




    return (
        <>

            <div className='  d-flex vh-100 justify-content-center align-content-center bg-info   '>
                <div className='p-3 bg-white w-25'>
                    <form className=" ">
                        <div className="mb-3">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary" onClick={yes}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
