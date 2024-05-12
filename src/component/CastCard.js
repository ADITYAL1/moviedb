import React, { useState } from 'react'
import { cdn_url } from '../utils/constants'




const CastCard = ({ProfilePath,Name,Character}) => {
  

  if(!ProfilePath) return null;


 
  return (

  <div className='w-32 md:w-52   text-white p-2'>
      <img  alt='movie card' src={cdn_url+ProfilePath}></img>
      <p className='p-1'>{Name}</p>
      <p >Character: {Character}</p>
    </div>
  )
}

export default CastCard
