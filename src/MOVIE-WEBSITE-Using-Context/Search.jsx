import React from 'react'
import { CustomHook } from './context'


const Search = () => {

    const { query, setQuery, isError } = CustomHook();






    return (
        <>

            <h1 className=' text-center'>Search Your Fav. Movie</h1>
            <hr />
            <section>
                <form action='#' onSubmit={(e) => e.preventDefault()}>


                    <div className=' mt-5  row d-flex justify-content-center  '>
                        <div className='input-lg  form-group col-lg-4 col-lg-offset-4'>
                            <input type="text" placeholder=' search Name'
                                value={query}
                                onChange={(e) => { setQuery(e.target.value) }}
                                className='   form-control  form-control-lg input-lg   rounded-pill' />
                        </div>
                    </div>

                </form>
                <div className='Error_card fs-4 text-center text-capitalize fw-bold  text-danger'>
                    <p>{isError.show && isError.msg}</p>

                </div>

            </section>
        </>

    )
}

export default Search
