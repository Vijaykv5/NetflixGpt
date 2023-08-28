import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)

  const toggeSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div>
      <img className="absolute bg-slate-500 "  src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='background'/>
      </div>
      <form className='absolute bg-black py-20 px-5 m-36 w-[440px] mx-auto  right-0 left-0 text-white text-center rounded-md bg-opacity-80'>
        <h1 className='font-medium text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ?
        <>
        <input type="text" placeholder='Email' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        <input type="text" placeholder='Password' className='p-3 px-5 my-3  w-full rounded-md bg-[#333333] text-gray-400'/>
        </>
        :
        <>
        <input type="text" placeholder='Full Name' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        <input type="text" placeholder='Email' className='p-3 px-5 my-3 w-full rounded-md bg-[#333333] text-gray-400'/>
        <input type="text" placeholder='Password' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        </>
        }
        <button className='py-4 my-6 bg-red-600 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer text-slate-400' onClick={toggeSignInForm}>{isSignInForm ? "New to netflix? Sign up now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login