import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from './context'
import axios from 'axios'
import CopyWrite from './CopyWrite'


const SingleMobie = () => {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState("")


    const getMovie = async (url) => {
        setIsLoading(true)
        // console.log("222222222222222222222222222", url)
        try {
            const res = await axios.get(url)
            const data = await res.data
            // console.log(data)

            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data)
                // console.log("helll11111111", data.Error)
            }

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        // console.log(id)
        let timeout = setTimeout(() => {
            getMovie(`${API_URL}&i=${id}`);
        }, 800)
        return () => clearTimeout(timeout)
    }, [id]);

    if (isLoading) {
        return (
            <div className='movie_loading text-center fs-3 fw-bold  '>
                <div className=' d-flex justify-content-center'>
                    loading....
                </div>
            </div>
        )

    }




    return (
        <>

            <section>
                <div className=' d-flex justify-content-center '>
                    <div className='naem border'>
                        <div className="card2 mb-3" >
                            <div className="row g-0  m-5  mt-5">
                                <div className="col-4">
                                    <img src={movie.Poster} className="img-fluid rounded-start mt-5" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body mt-5">
                                        <h3 className="card-title">Movie Name : {movie.Title}</h3>
                                        <br />
                                        <h5 className="card-text">Movie Genre : {movie.Genre}</h5>
                                        <h5 className="card-text">Actors Name : {movie.Actors}</h5>
                                        <h5 className="card-text">Movie imdbRating : {movie.imdbRating}/10</h5>
                                        <p className="card-text lh-base"><b> Movie Plot :</b> {movie.Plot}</p>
                                        <h5 className="card-text"> BoxOffice : {movie.BoxOffice}</h5>

                                        <h5 className="card-text">Country Name : {movie.Country}</h5>
                                        <h5 className="card-text">Actors Director : {movie.Director}</h5>
                                        <h5 className="card-text">Movie Writer : {movie.Writer}</h5>
                                        <h5 className="card-text">Movie Released : {movie.Released}</h5>
                                        <br />
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </section>
            <footer>
                <CopyWrite />
            </footer>



            {/* <div className='main_card2'>
                <div className='EachMovie d-flex justify-content-center m-5'>
                    <div className='row'>
                        <div className='imgage d-flex   justify-content-around'>
                            <figure className='col-2'>
                                <img src={movie.Poster} alt="..." />
                            </figure>
                            <div className='details ' >
                                <div>
                                    <div className="card-body">
                                        <h3 className="card-title">Movie Name : {movie.Title}</h3>
                                        <h5 className="card-text">Movie Genre : {movie.Genre}</h5>
                                        <h5 className="card-text">Actors Name : {movie.Actors}</h5>
                                        <h5 className="card-text">Movie imdbRating : {movie.imdbRating}/10</h5>
                                        <p className="card-text lh-base"><b> Movie Plot :</b> {movie.Plot}</p>
                                        <h5 className="card-text">Country Name : {movie.Country}</h5>
                                        <h5 className="card-text">Actors Director : {movie.Director}</h5>
                                        <h5 className="card-text">Movie Writer : {movie.Writer}</h5>
                                        <h5 className="card-text">Movie Released : {movie.Released}</h5>
                                        <br />
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div> */}





        </>

    )
}












export default SingleMobie




