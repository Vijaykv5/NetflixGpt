import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  // console.log(movies?.nowPlayingMovies);
  return (
    <div className='bg-black'>
      <div className='md:-mt-52  mt-0 relative z-10 '>
      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularmovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topratedmovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingmovies}/>


      </div>
    </div>
  )
}

export default SecondaryContainer