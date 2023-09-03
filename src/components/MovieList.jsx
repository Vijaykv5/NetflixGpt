import React from 'react';
import MovieCard from './mOVIEcARD.JSX';

const MovieList = ({ title, movies }) => {
  return (
    <div className='p-6 text-white'>
        <h1 className='text-3xl font-semibold p-5 '>{title}</h1>
      <div className='flex p-5 flex-row overflow-x-scroll'>
        
        <div className=' flex flex-row'>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path} />
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
