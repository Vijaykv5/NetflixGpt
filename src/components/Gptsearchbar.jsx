
import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addgptmovieresult } from '../utils/gptSlice';


const Gptsearchbar = () => {
    const dispatch =useDispatch();
    const searchtext =useRef(null);
    //search movie tmdb

    const searchmovietmdb =async(movie)=>{
        const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_Options)
        const json = await data.json();
        return json?.results;

    }
    const handlegptsearchclick= async () =>{
        console.log(searchtext.current.value);

        const gptQuery="Act as a movie Recommendation syaytem and suggest the movie names for the query "+searchtext.current.value+". Only give name of 6 movies , commasaperated movies like given in examples ahead. Example result : dil chahta hai , kabir singh , Fraud , kabhi khushi kabhi kham , Jawaan, lOVE STORY";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
      

        const gptmovies=gptResults.choices?.[0]?.message?.content.split(",");

        const promisearray=gptmovies.map((movies)=> searchmovietmdb(movies));

        const tmdbresults= await Promise.all(promisearray)

        console.log("tmdb",tmdbresults[0]);
        dispatch(addgptmovieresult({moviename:gptmovies,movielist:tmdbresults}));
        
      }
  return (
    <div className='pt-[15%]  justify-center flex  '>
        <form className='w-[90%] bg-black md:w-1/2 grid grid-cols-12 md:p-0 ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} type="text" className='p-2 m-3 col-span-6 md:p-4 md:m-4 md:col-span-8 md:w-[95%] w-60 ' placeholder='What would you like to watch today?'/>
            <button onClick={handlegptsearchclick} className='ml-20  md:px-4 md:py-2 px-3 md:w-[85%] w-20  m-3 md:m-4 bg-red-600 text-white rounded-md  md:col-span-4 col'> Search</button>
        </form>
    </div>
  )
}

export default Gptsearchbar