import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const NavBar = () => {
    return (
        <>
            <div className=' text-capitalize  '>
                <nav className="navbar sticky-top bg-primary " data-bs-theme="dark" style={{ backgroundColor: "#e3f2fd" }} >
                    <div className="container-fluid">
                        <h3 className='text-warning'>
                            Jayesh Tapdiya
                        </h3>

                        <ul className="nav justify-content-end  nav-pills nav-fill">
                            <li className="nav-item fs-4 me-4">
                                <Link to={'/home'} activeClassName="nav-link text-warning-emphasis" exact={true} aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item fs-4 me-4 ">
                                <Link to={'/service'} activeClassName="nav-link  text-warning-emphasis" exact={true}>Service</Link>
                            </li>
                            <li className="nav-item fs-4 me-4">
                                <Link to={'/about'} activeClassName="nav-link text-warning-emphasis" exact={true} >About</Link>
                            </li>
                            <li className="nav-item fs-4 me-4">
                                <Link to={'/contact'} activeClassName="nav-link  text-warning-emphasis" exact={true} >Conatct</Link>
                            </li>
                            <li className="nav-item fs-4 me-4">
                                <Logout />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

<Link to={'/home'} activeClassName="" exact={true} >
    Home Page
</Link>

export default NavBar
