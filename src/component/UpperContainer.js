import React from 'react'
import { useSelector } from 'react-redux'
import { cdn_url } from '../utils/constants';

const UpperContainer = () => {
   const details=useSelector((store)=>store.movies.MovieDetails);
   if (!details) return;
    
  return (
    <div className=' mx-2 my-2 md:mx-10 md:my-5  bg-gray-900'>
     <div className='flex flex-row'>
      <div className='w-[50%] p-5'>
       <div className=' flex flex-row'>
       <img className='w-28 md:w-52 ' alt='movie card' src={cdn_url+details?.poster_path}></img>
        <div>
          <p className=' text-white text-sm md:text-2xl font-bold p-2'>{details.original_title}</p>
          <p className=' text-white p-2 text-sm md:text-2xl'>{'Rating :'+details.vote_average}</p>
          <div className='flex flex-row p-2'>
          {details.genres?.map((gen)=><p className='text-white text-sm md:text-xl '>{gen.name+','}</p>)}
          </div>
          <p className='text-white p-2 text-sm md:text-xl'>Release Date : {details.release_date}</p>
        </div>
       </div>
       <p className=' text-white text-2xl font-bold'>overview</p>
       <p className='text-white text-xs md:text-base'>{details.overview}</p>
       </div>
     <img className=' invisible md:visible w-[50%] bg-gradient-to-r from-gray-900' alt='movie card' src={cdn_url+details.backdrop_path}></img>
     </div> 
    </div>
  )
}

export default UpperContainer
