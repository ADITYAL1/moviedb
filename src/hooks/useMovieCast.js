import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {  addMovieCast, addMovieDetails, addPopularMovies } from "../utils/moviesSlice";

  
  const useMovieCast = (id) => {
   

  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US',
       );
      
      const json=await data.json();
     
      
      dispatch(addMovieCast(json));
      
   }
   useEffect(()=>{
   adi();
   }, []);

  }
  
  export default useMovieCast;
 
 

  