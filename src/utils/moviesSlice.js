import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularmovies:null,
        topratedmovies:null,
        upcomingmovies:null
    },
    reducers:{
     addNowPlayingMovies :(state,action)=>{
        state.nowPlayingMovies=action.payload;
     },
     addPopularMovies:(state,action)=>{
        state.popularmovies=action.payload;
     },
     addTopRatedMovies:(state,action)=>{
        state.topratedmovies=action.payload;
     },
     addUpComingMovies:(state,action)=>{
        state.upcomingmovies=action.payload;
     },
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;