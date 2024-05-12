import React from 'react'
import { useSelector } from 'react-redux';
import CastCard from './CastCard';

const LowerContainer = () => {
  const Cast=useSelector((store)=>store.movies.MovieCast);
  if(!Cast) return;
  return (
    <div className='p-2'>
      <p className='text-white text-2xl font-bold'>Cast</p>
      <div className='flex flex-row flex-wrap'>
      {Cast.cast.map((cas)=><CastCard ProfilePath={cas.profile_path} Name={cas.name} Character={cas.character}/>) }
    </div>
    </div>
  )
}

export default LowerContainer
