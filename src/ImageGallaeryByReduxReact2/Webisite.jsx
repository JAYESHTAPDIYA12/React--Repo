import React from 'react'
import { breakfast, snacks, lunch, dinner, all } from './Actions'
import { useDispatch, useSelector } from 'react-redux'



const Webisite = () => {


    const state = useSelector((state) => state.Reducers.list)
    const dispatch = useDispatch();
    const year = new Date().getFullYear()



    return (
        <>
            <div className='body'>
                <div className='main_frame'>
                    <div className='heading mt-5 text-center text-capitalize p-3 fs-2'>
                        <h1>Order Your Food</h1>
                    </div>
                    <ul >
                        <div style={{ listStyle: 'none' }} className='nav_bar d-flex justify-content-evenly '>
                            <li><button type="button" className="btn btn-warning text-capitalize fs-4" onClick={() => dispatch(breakfast())}> breakfast </button></li>
                            <li><button type="button" className="btn btn-warning text-capitalize fs-4" onClick={() => dispatch(lunch())}> lunch </button></li>
                            <li><button type="button" className="btn btn-warning text-capitalize fs-4" onClick={() => dispatch(snacks())}> snacks</button></li>
                            <li><button type="button" className="btn btn-warning text-capitalize fs-4" onClick={() => dispatch(dinner())}> dinner </button></li>
                            <li><button type="button" className="btn btn-warning text-capitalize fs-4" onClick={() => dispatch(all())}> All </button></li>
                        </div>

                    </ul>

                    <br />
                    <hr />

                    <div className="row ">
                        {state.map((elem) => {
                            return (
                                <div className='col-4 mb-3'>
                                    <div className=' p-5 each_items mt-5' >
                                        <div className="card p-2" style={{ width: "18rem" }} >
                                            <img src={elem.image} class=" image card-img-top" alt="dishes logo" />
                                            <div className="card_body ">
                                                <h5 className="card-title text-capitalize">{elem.name}</h5>
                                                <p className="card-text text-capitalize">{elem.decription}</p>
                                            </div>
                                            <ul className="   list-group list-group-flush">
                                                <li className=" list list-group-item text-capitalize">{elem.category}</li>
                                                <li className=" list list-group-item text-capitalize">{elem.price}</li>
                                                <li className=" list list-group-item text-capitalize"><button type="button" className="btn btn-warning ">  Order Now  </button></li>
                                            </ul>
                                            <div className="card-body">
                                                <a href="#" class="card-link">Card link</a>
                                                <a href="#" class="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
                <footer className=' text-center fw-semibold fs-4'>
                    COPYRIGHT © {year}
                </footer>
            </div>
        </>
    )
}

export default Webisite
