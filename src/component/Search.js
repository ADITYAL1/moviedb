import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { addSeCurPage, addSePrevPage } from '../utils/moviesSlice';
import useSearch from '../hooks/useSearch';

const Search = () => {
  useSearch();
 const dispatch=useDispatch();
  const movies= useSelector((store)=>store.movies.search);
  const page= useSelector((store)=>store.movies.searchpage);
  const totalpages= useSelector((store)=>store.movies.totalsearchpage);
  const onnextpage=()=>{
    dispatch(addSeCurPage());
    }
    const onprevpage=()=>{
     dispatch(addSePrevPage());
    }
  return (
    <div className=' h-screen md:h-auto md:mt-2  md:ml-28 md:mr-6'>
     
     <div className=' flex  flex-wrap'>
         { movies?.map((movie) =>(
          <MovieCard key={movie.id}  id={movie.id} posterPath={movie.poster_path} title={movie.title} rating={movie.vote_average}/>))}
         </div>
         <Pagination currentPage={page} totalPages={totalpages} nextDispatch={onnextpage} prevDispatch={onprevpage}/>
    </div>
  )
}

export default Search
