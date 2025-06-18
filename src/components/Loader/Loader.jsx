import React from 'react'
import "./Loader.css"
const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      
      <div className='w-13 h-13 flex justify-center items-center border-4 border-dashed rounded-full animate-spin border-amber-600'> 🏵️
      </div>
      <h1 className='text-5xl font-bold text-amber-600 animate-bounce tracking-wider'><div className='animate-pulse'>SigmaMart</div></h1>

      
    </div>
  )
}

export default Loader
