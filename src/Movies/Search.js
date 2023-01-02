import React from 'react'
import {useMovieContext} from './context'

const Search = () => {
  const {item, setItem} = useMovieContext()
  // console.log(input);
  return (
    <form action='#' onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" name="" value={item} onChange={(e)=>setItem(e.target.value)} />
    </form>
  )
}

export default Search