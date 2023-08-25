// we are making using context
// we are using this like a warehouse 
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'


// ye apna appocntext name karke ek context create kiya
const AppContext = React.createContext();

// making the api in use

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


// now making an provider which will take data to all the sites
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: false, msg: "" })
    const [query, setQuery] = useState("avenger")


    const getMovie = async (url) => {
        setIsLoading(true)

        try {
            const res = await axios.get(url)
            const data = await res.data
            console.log(data)

            if (data.Response === "True") {
                setIsError({
                    show: false,
                    msg: '',
                })
                setIsLoading(false)
                setMovie(data.Search)

            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                })
            }

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        let timeout = setTimeout(() => {
            getMovie(`${API_URL}&s=${query}`);
        }, 800)
        return () => clearTimeout(timeout)
    }, [query]);


    return (
        <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>
            {children}

        </AppContext.Provider>
    )

}

// custom hook adn using it :-

const CustomHook = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, CustomHook };