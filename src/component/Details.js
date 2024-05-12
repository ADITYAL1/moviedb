import React from 'react'
import { useParams } from 'react-router-dom'
import UpperContainer from './UpperContainer';
import LowerContainer from './LowerContainer';
import useMovieDetail from '../hooks/useMovieDetail';
import useMovieCast from '../hooks/useMovieCast';

const Details = () => {

    const {id}=useParams();
   
    useMovieCast(id);
    useMovieDetail(id);
  return (
    <div className=' bg-gray-500'>
      <UpperContainer/>
      <LowerContainer/>
    </div>
  )
}

export default Details
