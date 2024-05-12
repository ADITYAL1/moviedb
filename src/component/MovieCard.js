import React, { useState } from 'react'
import { cdn_url } from '../utils/constants'

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath,id,rating,title}) => {
  

  if(!posterPath) return null;


 
  return (
<Link to={'/details/'+id}>
  <div className=' w-20 md:w-40 m-5  md:m-14 text-white text-center font-bold'>
      <img  alt='movie card' src={cdn_url+posterPath}></img>
      <h1 className='text-sm md:text-base p-1'>{title}</h1>
      <p className='text-sm md:text-base'>Rating: {rating}</p>
    </div></Link>
  )
}

export default MovieCard
