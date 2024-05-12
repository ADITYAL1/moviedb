import React, { useState } from 'react'


const Pagination = ({currentPage,totalPages,nextDispatch,prevDispatch}) => {
   
    

   const handleNext=()=>{
    
   if(currentPage<100){
      nextDispatch();
   }
   }
   const handlePrev=()=>{
    if(currentPage>1){
       prevDispatch();
    }
   }

  return (
    <div className=' flex justify-center  pb-10 mr-10   '>
      <button onClick={handlePrev} className='p-2 m-1 bg-gray-900  text-white'>Prev</button>
      <p className=' text-white  p-2 '>{currentPage+' out of '+totalPages+' pages'}</p>
      <button onClick={handleNext} className='p-2 m-1 bg-gray-900  text-white'>Next</button>
    </div>
  )
}

export default Pagination
