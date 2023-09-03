import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  // console.log(movies?.nowPlayingMovies);
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10 '>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>


      </div>
    </div>
  )
}

export default SecondaryContainer