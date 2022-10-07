import React from 'react'
import Navbar from './Navbar'

import stPeter from '../assets/st-peters.png'

const Banner = () => {
  return (
    <div>
        <Navbar/>
        <div>
              <img className='w-full h-[200px] object-cover' src={stPeter} alt="" />
        </div>
        <div className='flex items-center '>
              <div div className='flex items-center px-4 py-2 my-8 mx-8  cursor'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4 text-xl text-bold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <p className='text-lg font-medium'>Back to Pool</p>   
            </div>
            <h1 className='text-3xl font-bold items-center'>Donate to St. Peter High School</h1>
        </div>

        <div className='text-center my-2 py-1-0'>
            <h2 className='text-2xl font-semibold'>Select Donation Amount</h2>
              <div className='flex align-middle m-auto'>
                <button>$1000</button>
                <button>$500</button>
                <button>$100</button>
                <button>Custom</button>
              </div>
        </div>
    </div>
  )
}

export default Banner