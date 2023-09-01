import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from "../utils/firebase"
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,updateProfile} from "firebase/auth"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch =useDispatch();
  const navigate= useNavigate()
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  
  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
//Sign Up Form
    if(!isSignInForm){
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user=userCredential.user;
    // const photoURL = user.photoURL;
    // console.log(photoURL);

    updateProfile(auth.currentUser, {
      displayName: name.current.value,
     
     
    }).then(() => {
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
   
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    // ..
  }); 
}
else{
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
.then((userCredential)=>{
  const user=userCredential.user;
  console.log(user);
  navigate("/browse");
}
)
.catch((error)=>{
  const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("User Not Found");
    
    
})
}
  }
  const toggeSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("1",user);
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");

        
      } else {
        dispatch(removeUser());
        navigate("/");

      }
    });
    

  },[])


  return (
    <div>
      <Header/>
      <div>
      <img className="absolute bg-slate-500 "  src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='background'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}className='absolute bg-black py-20 px-5 m-36 w-[440px] mx-auto  right-0 left-0 text-white text-center rounded-md bg-opacity-80'>
        <h1 className='font-medium text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ?
        <>
        <input ref={email} type="text" placeholder='Email' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        <input ref={password} type="password" placeholder='Password' className='p-3 px-5 my-3  w-full rounded-md bg-[#333333] text-gray-400'/>
        </>
        :
        <>
        <input type="text" ref={name} placeholder='Full Name' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        <input type="text" ref={email} placeholder='Email' className='p-3 px-5 my-3 w-full rounded-md bg-[#333333] text-gray-400'/>
        <input type="password"  ref={password}placeholder='Password' className='p-3 px-5 my-4  w-full rounded-md bg-[#333333] text-gray-400'/>
        </>
        }
        <p className='text-red-500 '>{errorMessage}</p>
        <button className='py-4 my-6 bg-red-600 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer text-slate-400' onClick={toggeSignInForm}>{isSignInForm ? "New to netflix? Sign up now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login