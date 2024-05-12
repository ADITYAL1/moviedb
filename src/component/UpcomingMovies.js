import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { addUpCurPage, addUpPrevPage } from '../utils/moviesSlice';

const UpcomingMovies = () => {
  const dispatch=useDispatch();
  const page= useSelector((store)=>store.movies.upcomingpage);
  const totalpages=100;
  const movies= useSelector((store)=>store.movies.upcoming);
  const onnextpage=()=>{
     dispatch(addUpCurPage());
  }
  const onprevpage=()=>{
    dispatch(addUpPrevPage());
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

export default UpcomingMovies
