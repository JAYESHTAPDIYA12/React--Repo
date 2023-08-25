import React from 'react'
import Sdata from './Sdata'

const Service = () => {
    return (
        <>
            <div className=' text-center text-capitalize mb-5 mt-5'>
                <h1 style={{ textShadow: " 2px 2px red" }}>
                    our Service
                </h1>
            </div>
            <div className='row'>

                {
                    Sdata.map((ele) => {
                        return (
                            <div className='col-4 mt-4 h-25'>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={ele.image} class="card-img-top " style={{ width: "18rem", height: "150px" }} alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{ele.title}</h5>
                                        <p class="card-text " style={{ textAlign: "justify" }}>{ele.plot.length >= 45 ? `${ele.plot}...` : `${ele.plot}`}</p>
                                        <a href={ele.link} class="btn btn-primary">Know More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }

            </div>
        </>
    )
}

export default Service


// { movieName.length >= 15 ? `${movieName}...` : movieName }