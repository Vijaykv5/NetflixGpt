import React, { useEffect, useState } from 'react'
import { API_Options } from '../utils/constants';

const VideoBackground = ({movieid}) => {
    const [trailerid,setTrailerId]=useState(null);
    const getMovieVideos= async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",API_Options);
        const json=await data?.json();
        const filterData=json?.results.filter(video=>video.type==="Trailer")
        const trailer=filterData[0];
        
        setTrailerId(trailer?.key)
        
    }
    console.log("id :",trailerid);
    useEffect(()=>{
        getMovieVideos();
    },[movieid])
    
    
  return (
    <div className='w-full '>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerid+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground