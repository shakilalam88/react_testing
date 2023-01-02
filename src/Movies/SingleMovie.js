import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleMovie = (curMovie) => {
    const { Title, Poster,imdbID } = curMovie;
    return (
        <>
            <NavLink to={`movie/${imdbID}`}>
                <div className="card_itmes">
                    <div className="card-info">
                        <h2>{Title}</h2>
                        <img src={Poster} alt={Title} />
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default SingleMovie