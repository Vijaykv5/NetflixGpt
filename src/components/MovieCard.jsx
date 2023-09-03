import React, { useState } from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? 'scale(1.2)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };

  return (
    <div
      className='w-60 pr-6 movie-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={IMG_CDN + poster}
        alt='Movie Poster'
        style={imageStyle}
        className='poster-image'
      />
    </div>
  );
};

export default MovieCard;
