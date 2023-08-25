import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const n = useNavigate();

    const no = () => {
        alert("logging out!!!")
        localStorage.removeItem('user');
        n("/login")
    }
    return (
        <>
            <button type="button" class="btn btn-outline-danger" onClick={no}>Logout</button>

        </>
    )
}

export default Logout;
