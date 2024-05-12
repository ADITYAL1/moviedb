import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { addTopCurPage, addTopPrevPage } from '../utils/moviesSlice';

const TopRated = () => {
  const dispatch=useDispatch();
  const page= useSelector((store)=>store.movies.topRatedpage);

  const movies= useSelector((store)=>store.movies.TopRated);
  const totalpages=100;

  const onnextpage=()=>{
  dispatch(addTopCurPage());
  }
  const onprevpage=()=>{
    dispatch(addTopPrevPage());
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

export default TopRated
