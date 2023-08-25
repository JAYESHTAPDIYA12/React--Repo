import React from 'react'
import { Link } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <div className='  mt-5 h-100'>
                <div className=' d-flex justify-content-around align-items-center'>
                    <div className=' text-capitalize'>
                        <h2 style={{ textShadow: " 2px 2px 3px red" }}>welcome to {props.page} </h2>
                        <h3 >Grow your bussiness with</h3>
                        <h1 style={{ textShadow: " 2px 2px blue" }}>Jayesh Tapdiya</h1>
                        <br />
                        <h3>We are the team of talanted developer  making website</h3>
                        <br />
                        <button type="button" className="btn btn-outline-warning rounded-pill"  > <Link to={props.visit} style={{ textDecoration: "none" }} >{props.btn} </Link></button>
                    </div>
                    <div >
                        <figure>
                            <img src="https://picsum.photos/200/300" alt="...." />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common
