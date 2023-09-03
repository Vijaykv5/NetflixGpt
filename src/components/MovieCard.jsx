import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = (url) => {
  return (
    <div className='w-60 pr-6 '>
        <img src={IMG_CDN+url.poster}/>
    </div>
  )
}

export default MovieCard