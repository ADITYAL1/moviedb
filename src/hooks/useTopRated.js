import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";


  
  const useTopRated = () => {
    
  
  const dispatch=useDispatch();
  const page= useSelector((store)=>store.movies.topRatedpage);
    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page='+page,
       );
      const json=await data.json();
      
 
      dispatch(addTopRatedMovies(json.results));
   }
   useEffect(()=>{
   adi();
   }, [page]);

  }
  
  export default useTopRated;
 

