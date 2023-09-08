import React, { useState } from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster ,key }) => {
  console.log("Movie idss"+key)

  if(!poster) return null;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const videotrailer =(e)=>{
    console.log("Movie idss"+e)
    // window.location.href="https://www.youtube.com/watch?v=SUXWAEX2jlg"
 }

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };

  return (
    <div onClick={videotrailer(key)} className=' w-40 pr-5 md:w-60 md:pr-6 movie-card'onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
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
