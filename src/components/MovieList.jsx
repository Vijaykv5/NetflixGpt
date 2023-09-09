import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log("ID",movies[0]?.id);
  return (
    <div className='p-6 text-white '>
        <h1 className='md:text-3xl font-semibold p-5 text-2xl '>{title}</h1>
      <div className='flex p-5 flex-row overflow-x-scroll no-scrollbar '>
        
        <div className=' flex flex-row '>
          {movies && movies.length > 0 ? (
            movies.map((movie,index) => (
              <MovieCard  id={movie.id} poster={movie.poster_path} />
            ))
          ) : (
            <p>No movies to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
