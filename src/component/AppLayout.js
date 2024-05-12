import React from 'react'
import Header from './Header'
import Popular from './Popular'
import usePopularmovies from '../hooks/usePopularmovies'
import useUpcoming from '../hooks/useUpcoming'
import useTopRated from '../hooks/useTopRated'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  usePopularmovies();
useUpcoming();
useTopRated();
  return (
    <div className=' bg-gray-500'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default AppLayout
