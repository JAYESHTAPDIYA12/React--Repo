import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const no = () => {
        alert("logging out!!!")
        localStorage.removeItem('email');
        localStorage.removeItem('pass');

        navigate("/login")
    }
    return (
        <div>
            <button type="button" class="btn btn-danger" onClick={no}>Logout</button>
        </div>
    )
}

export default Logout


