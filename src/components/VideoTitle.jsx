import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title,overview}) => {
   const videotrailer =()=>{
    
   }
  return (
    <div className='aspect-video w-full absolute text-white bg-gradient-to-r from-slate-950'>
        <h1 className='mt-52 text-5xl mx-32 font-bold '>{title}</h1>
        <p className='my-16 mx-32 text-xl w-1/2 h-auto font-mono'>{overview}</p>
        <div className=' mx-32 text-white'>
            <button onClick={videotrailer}className='bg-white text-black py-2 px-4 rounded-md hover:bg-opacity-70'>▶️ Play</button>
            <button className='ml-4 bg-white text-black py-2 px-4 rounded-md hover:bg-opacity-70 '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle