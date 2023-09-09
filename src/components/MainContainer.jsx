import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies.nowPlayingMovies);
    function randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    //early return
    if(movies===null) return;
    const mainmovie=movies[randomNumber(0,19)];
    
    console.log(movies);
    const {original_title,overview,id}=mainmovie;
    // console.log(original_title);
    console.log(overview);
    console.log(id);

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id}/>
    </div>
  )
}

export default MainContainer