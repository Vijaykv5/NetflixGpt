import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggetion from './Gptsuggetion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
   <>
   <img className='absolute -z-10' src={BG_IMG}></img>
  <Gptsearchbar/>
  <Gptsuggetion/> 
   </>
  )
}

export default GptSearch