import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import {signOut} from 'firebase/auth'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate =useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };

  const user =useSelector((store=>store.user));
  const userName=user?.displayName;


  const handleSignout=()=>{
    signOut(auth).then(() => {
    navigate("/")
    
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <>
      <div className='absolute px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between'>
        <img
          className="w-56"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt='logo'
        />
        {user &&
        <div className='flex p-3'>
          <img
            id="dropdownDefaultButton"
            className='w-12 h-12 cursor-pointer'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
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
        }
      </div>
    </>
  );
};

export default Header;
