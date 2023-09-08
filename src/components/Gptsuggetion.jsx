import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const Gptsuggetion = () => {
    const gpt=useSelector((store)=>store.gpt);

    const {moviename , movielist}=gpt;
     const videotrailer =(e)=>{
        console.log("video"+e);
        //window.location.href="https://www.youtube.com/watch?v=SUXWAEX2jlg"//I need the video id 
     }

    if(!moviename) return null;

    if(!movielist) return null;

  return (
    <div  className='p-4 m-4 bg-black text-white opacity-90'  >
        {moviename.map((movies,index)=>(<MovieList  key={movies} title={movies} movies={movielist[index]}/>))}
        
    </div>
  )
}

export default Gptsuggetion