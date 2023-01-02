import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './context';
import {NavLink} from 'react-router-dom'



const MobileDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    console.log('shakil',movie);

    const getMovies = async (url) => {
        console.log("1",url);
        try {
            const res = await fetch(url);
            const data = await res.json()
            if(data.Response === 'True'){
                console.log("2",data);
                setMovie(data)
            }
        } catch (error) {

        }

    }

    useEffect(() => {
        getMovies(`${API_URL}&i=${id}`)
    }, [])

    return (
        <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    )
}

export default MobileDetails