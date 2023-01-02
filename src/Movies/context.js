import React, { useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=21819c6`

const MovieContext = React.createContext();


export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState([])
    const [item, setItem] = useState('spider-man')

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json()
            if(data.Response === 'True'){
                setMovie(data.Search)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies(`${API_URL}&s=${item}`)
    },[item])

    return (
            <MovieContext.Provider value={{ movie, item, setItem }}>
                {children}
            </MovieContext.Provider>

    )
}

export const useMovieContext = () => {
    return useContext(MovieContext)
}

