import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { addSearchMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const searchtext=useRef();
const dispatch=useDispatch();
  const fetchmovie=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query='+movie+'&page=1');
   const json=await data.json();
   
   return json.results;
  }
  const handleSearch=async()=>{
    const movie=searchtext.current.value;
   
   const tmdbres=await fetchmovie(movie);
 
    dispatch(addSearchMovies(tmdbres));
  }
  return (
    <div className='  w-screen px-4 py-2 bg-gray-900  md:px-8 md:py-4 md:w-full'>
      <div className=' flex flex-row justify-between text-white'>
          <p className=' md:px-24 font-bold text-xl'>MovieDb</p>
          <div className='flex md:px-24'>
          <ul className='mx-2 md:m-0 list-none flex flex-col md:flex-row'>
          <Link to='/'>  <li className=' text-sm md:text-base p-1  md:p-2'>Popular</li></Link>
          <Link to='/topRated'>  <li className='text-sm md:text-base p-1 md:p-2'>Top-Rated</li></Link>
           <Link to='/upcoming'> <li className='text-sm md:text-base p-1 md:p-2'>Upcoming</li></Link>
          </ul>
          <form onSubmit={(e)=>e.preventDefault()} className=' ml-16 md:ml-0'>
          <input ref={searchtext} type='text' placeholder='  Movie name' className=' w-36  md:w-72 m-1 p-1 md:p-2 rounded-lg text-black'></input>
        <Link to='/search'> <button onClick={handleSearch} className='mt-2 md:mt-0 rounded-lg p-1   md:p-2 ml-12 md:ml-2 bg-gray-500 text-black'>Search</button></Link> 
          </form>
         </div>
      </div>
    </div>
  )
}

export default Header
