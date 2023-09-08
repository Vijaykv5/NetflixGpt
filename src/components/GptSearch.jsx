import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggetion from './Gptsuggetion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
   <>
   <img className='fixed -z-10 h-screen object-cover md:w-screen ' src={BG_IMG}></img>
   <div className='pt-[30%] md:pt-0'>
  <Gptsearchbar/>
  <Gptsuggetion/> 
  </div>
   </>
  )
}

export default GptSearch