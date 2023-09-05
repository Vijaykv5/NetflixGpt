import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import {signOut} from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logo, userpic } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { addUser } from '../utils/userSlice';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const gptSearch=()=>{
    dispatch(toggleGptSearchView());
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };

  const user =useSelector((store=>store.user));
  const userName=user?.displayName;


  const handleSignout=()=>{
    signOut(auth).then(() => {
    navigate("/")
    dispatch(addUser(userName))
    
    }).catch((error) => {
      // An error happened.
    });
   
  }

  return (
    <>
      <div className=' px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between absolute  '>
        <img
          className="w-44"
          src={logo}
          alt='logo'
        />
        {user?
        <div className='flex p-3'>
          <button onClick={gptSearch}className='text-white mx-9 bg-red-600 rounded-md mr-4  px-7'>GPT Search</button>

          <img
            id="dropdownDefaultButton"
            className='w-12 h-12 cursor-pointer'
            src={userpic}
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute bg-[#333333] text-slate-400 mt-14 w-60 right-2 p-2 rounded-lg shadow-lg">
              
              <ul>
                <div className=''>Hey {userName}👋 </div>
                <button onClick={handleSignout}>Sign out</button>
              </ul>
            </div>
          )}
        </div>
      :<div></div>}
      </div>
    </>
  );
};

export default Header;
