import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {  addPopularMovies } from "../utils/moviesSlice";

  
  const usePopularmovies = () => {
    
    const page= useSelector((store)=>store.movies.curPage);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page='+page,
       );
      const json=await data.json();
      
       
      dispatch(addPopularMovies(json.results));
   }
   useEffect(()=>{
   adi();
   }, [page]);

  }
  
  export default usePopularmovies;
 

