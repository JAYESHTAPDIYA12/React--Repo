import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
    const { name, age } = useParams();
    const l = useLocation();
    console.log(l)

    return (
        <>

            <h1>this is user name is {name} ,age is {age}....</h1>
            <h1>this is user page.....</h1>


            <h3>the url is {l.pathname}</h3>
            {l.pathname === '/user/jayesh/25' ? <button>click me</button> : alert("hello")}
        </>
    )
}

export default User;
