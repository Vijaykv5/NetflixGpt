import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRated from '../hooks/useTopRated';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      <Footer/>
    </div>
  )
}

export default Browse