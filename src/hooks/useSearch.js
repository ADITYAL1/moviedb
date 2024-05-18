import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies, addTotalPage } from "../utils/moviesSlice";


  
  const useSearch = () => {
    
  
  const dispatch=useDispatch();
  
  const movie= useSelector((store)=>store.movies.movietext);
  const page= useSelector((store)=>store.movies.searchpage);
    const adi= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query='+movie+'&page='+page);
        const json=await data.json();
        const total=json.total_pages;
        dispatch(addTotalPage(total));
        dispatch(addSearchMovies(json.results));
   
   }
   useEffect(()=>{
   adi();
   }, [page,movie]);

  }
  
  export default useSearch;
 
