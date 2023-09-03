import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";



const useTopRated = ()=>{
        const dispatch =useDispatch();
        const getTopratedMovies=async()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_Options);
            const json =await data.json();
           dispatch(addTopRatedMovies(json.results));
           console.log("top rated -",json.results);
        }
        useEffect(()=>{
            getTopratedMovies();
        },[])


}
export default useTopRated;