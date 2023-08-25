import React from 'react'
import { CustomHook } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
    const { movie, isLoading } = CustomHook()


    if (isLoading) {
        return (
            <div className='movie_loading text-center fs-3 fw-bold'>
                <div className=' d-flex justify-content-center'>
                    loading....
                </div>
            </div>
        )

    }

    return (
        <>
            <section >
                <div className='row '>

                    {movie.map((ele) => {
                        const movieName = ele.Title.substring(0, 15)


                        return <>
                            <div className='   col-3 mb-3 p-5 d-flex  card_main '>
                                <NavLink to={`movie/${ele.imdbID}`} key={ele.imdbID} >
                                    <div className='each_item  justify-content-center'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <div className="card-body">
                                                <h3>{movieName.length >= 15 ? `${movieName}...` : movieName}</h3>
                                                <img src={ele.Poster} className="image card-img-top image_item img-fluid" alt="Movie poster" />

                                            </div>
                                        </div>
                                    </div>


                                </NavLink>
                            </div>
                        </>




                    })}
                </div>
            </section>


        </>
    )
}

export default Movies;
