import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../LoginPage&website/Logout';

const Navbar = () => {
    return (

        <>
            <ul>
                <li>
                    <Link to={'/home'} activeClassName="" exact={true} >
                        Home Page
                    </Link></li>
                <li>
                    <Link to={'/shop'} activeClassName='' exact={true}>
                        Shop Us
                    </Link>
                </li>

                <li>
                    <Link to={'/search'} activeClassName='' exact={true}>
                        search
                    </Link>
                </li>

                <li>
                    <Link to={'/user'} activeClassName='' exact={true} >
                        Users
                    </Link>
                </li>

                <li>
                    <Link to={'/contact'} activeClassName='' exact={true} >
                        Contact Us
                    </Link>
                </li>
                <li>{<Logout />}</li>
            </ul>
        </>
    )
}

export default Navbar;
