import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch:true
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!showGptSearch;
        }
    }

})


export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;