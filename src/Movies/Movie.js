import React from 'react'
import { useMovieContext } from './context';

import SingleMovie from './SingleMovie';

const Movie = () => {
  const { movie } = useMovieContext()
  return (
    <>
      <section className='movie-page'>
        <div className="container grid grid-4-col">
          {movie.map((curMovie, index) => {
            const { Title, Poster, imdbID} = curMovie;
            return (
              <SingleMovie key={index} {...curMovie}/>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Movie