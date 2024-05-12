import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {  addUpcomingMovies } from "../utils/moviesSlice";

  
  const useUpcoming = () => {
    
  
  const dispatch=useDispatch();
  const page= useSelector((store)=>store.movies.upcomingpage);
    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page='+page,
       );
      const json=await data.json();
      
 
      dispatch(addUpcomingMovies(json.results));
   }
   useEffect(()=>{
   adi();
   }, [page]);

  }
  
  export default useUpcoming;
 

