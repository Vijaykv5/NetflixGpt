import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userpic } from "../utils/constants";
import logo from "../../assets/images/logo.png";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser } from "../utils/userSlice";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
    const gptbtn=useSelector((store)=>store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const userName = user?.displayName;

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(addUser(userName));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className=" px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row justify-between absolute  ">
        <img className="w-48 pt-4 h-16 mx-auto md:ml-0" src={logo} alt="logo" />
        {user && (
          <div className="flex p-3">
            <button
              onClick={gptSearch}
              className="text-white mx-auto md:mx-9 bg-red-600 rounded-md md:mr-4 px-5 py-2 my-6 md:my-0 md:px-7"
            >
             {gptbtn?  "Home Page" : "GPT Search" }
            </button>

            <img
              id="dropdownDefaultButton"
              className="hidden md:inline-block w-12 h-12 cursor-pointer"
              src={userpic}
              onClick={toggleDropdown}
            />
            
            {isDropdownOpen && (
              <div className="absolute bg-[#333333] text-slate-400 mt-14 w-60 right-2 p-2 rounded-lg shadow-lg">
                <ul>
                  <div className="">Hey {userName}👋 </div>
                  <button onClick={handleSignout}>Sign out</button>
                </ul>
              </div>
            )}
          </div>
        )}
        <div></div>
      </div>
    </>
  );
};

export default Header;
