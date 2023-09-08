import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch:false,
        moviename:null,
        movielist:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addgptmovieresult:(state,action)=>{
            const {moviename,movielist}=action.payload;
            state.moviename=moviename;
            state.movielist=movielist;
        }
    }

})


export const {toggleGptSearchView,addgptmovieresult}=gptSlice.actions;
export default gptSlice.reducer;