
import React, { useRef } from 'react'
import openai from '../utils/openai';


const Gptsearchbar = () => {
    const searchtext =useRef(null)

    const handlegptsearchclick= async () =>{
        console.log(searchtext.current.value);

        const gptQuery="Act as a movie Recommendation syaytem and suggest the movie names for the query "+searchtext.current.value+". Only give name of 6 movies , commasaperated movies like given in examples ahead. Example result : dil chahta hai , kabir singh , Fraud , kabhi khushi kabhi kham , Jawaan, lOVE STORY";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
      
        console.log(gptResults.choices?.[0]?.message?.content);

        const gptmovies=gptResults.choices?.[0]?.message?.content.split(",");
      }
  return (
    <div className='pt-[15%] justify-center flex '>
        <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} type="text" className='p-4 m-4 col-span-8 ' placeholder='What would you like to watch today?'/>
            <button onClick={handlegptsearchclick} className='px-4 py-2 m-4 bg-red-600 text-white rounded-md col-span-4'> Search</button>
        </form>
    </div>
  )
}

export default Gptsearchbar