import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Pagination from './Pagination';
import { addPrevPage, addcurPage } from '../utils/moviesSlice';

const Popular = () => {
  const dispatch =useDispatch();
  const page= useSelector((store)=>store.movies.curPage);
  const totalpages=100;
  const movies= useSelector((store)=>store.movies.PopularMovies);
 const onnextpage=()=>{
 dispatch(addcurPage());
 }
 const onprevpage=()=>{
  dispatch(addPrevPage());
 }

  return (
    <div className='m-2 md:mt-2  md:ml-28 md:mr-6'>
     
     <div className=' flex  flex-wrap'>
         { movies?.map((movie) =>(
          <MovieCard key={movie.id}  id={movie.id} posterPath={movie.poster_path} title={movie.title} rating={movie.vote_average}/>))}
         </div>
           <Pagination currentPage={page} totalPages={totalpages} nextDispatch={onnextpage} prevDispatch={onprevpage}/>
    </div>
  )
}

export default Popular
