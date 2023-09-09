import React, { useEffect, useState } from 'react';
import { API_Options, IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster ,id }) => {
  console.log("Movie idssss"+id)
  console.log("pp path"+poster)


  if(!poster) return null;
  const [isHovered, setIsHovered] = useState(false);
  //to get youtube key
//   const [trailerid,setTrailerId]=useState(null);
//   const getMovieVideos= async()=>{
//     const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",API_Options);
//     const json=await data.json();
//     const filterData=json?.results.filter(video=>video.type==="Trailer")
//     const trailer=filterData[0];
//     setTrailerId(trailer?.key)
    
// }
// console.log("id :",trailerid);
// useEffect(()=>{
//     getMovieVideos();
// },[])

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const videotrailer =(e)=>{
    console.log("Movie idss"+e)
    if(!e) return null;
 
    // window.location.href="https://www.youtube.com/watch?v="+trailerid;
 }

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };

  return (
    <div onClick={videotrailer(id)} className=' w-40 pr-5 md:w-60 md:pr-6 movie-card'onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <img
        src={IMG_CDN + poster}
        alt='Movie Poster'
        style={imageStyle}
        className='poster-image rounded-lg'
      />
    </div>
  );
};

export default MovieCard;
