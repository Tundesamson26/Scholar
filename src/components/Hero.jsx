import React from 'react'

import stPeter from '../assets/st-peters.png'

const Hero = () => {
  return (
    <div className='w-full h-screen px-32 py-32'>
          <div className=''>
              <h1 className='text-4xl text-bold text-center'>Scholarship Pool</h1>
          </div>
          <div className='grid md:grid-cols-2 '>
              <div className='bg-[#F3EEE2] text-[#2B3035] m-4 p-8 rounded-xl shadow-2xl'>
                  <div>
                      <img className='w-full mt-[-5%] object-cover' src={stPeter} alt="/" />
                      <h1 className='pt-8 text-center text-3xl font-bold text-[#2B3035]'>St. Peters High School</h1>
                      <button className='border-[#395241]  text-bold text-emarald-400 rounded-sm py-4 my-4 w-full text-center'>Read more</button>
                  </div>
                  <div>
                    <div className='flex md:flex-row justify-between py-8 px-8 '>
                        <div className='text-center '>
                              <h3 className='text-2xl font-bold '>23</h3>
                              <p className='text-[#2B3035] text-bold'>Scholarships <br /> funded</p>
                        </div>
                          <div className='text-center '>
                              <h3 className='text-2xl font-bold '>1</h3>
                              <p className='text-[#2B3035] text-bold'>Remaining <br />naming right</p>
                          </div> 
                    </div>
                      <div className="w-full bg-[#F3EEE2] rounded-full h-2.5 mb-4 dark:bg-[#395241]">
                          <div className="bg-[#395241] w-[65%] h-2.5 rounded-full dark:bg-[#395241]" ></div>
                      </div>
                      <p className='py-1 mb-8 text-center text-[#2B3035]'>$300 more to fund the next scholarships</p>
                  </div> 
                  
                  <div>
                      <button className='inline-block px-6 py-2.5 bg-[#395241] text-[#F3EEE2] font-bold text-xl leading-tight rounded shadow-md'>Donate Now</button>
                  </div>
            </div>
            
              <div className='bg-[#F3EEE2] text-[#2B3035] m-4 p-8 rounded-xl shadow-2xl'>
                  <div>
                      <img className='w-full mt-[-5%] object-cover' src={stPeter} alt="/" />
                      <h1 className='pt-8 text-center text-3xl font-bold text-[#2B3035]'>St. Peters High School</h1>
                      <button className='border-[#395241]  text-bold text-emarald-400 rounded-sm py-4 my-4 w-full text-center'>Read more</button>
                  </div>
                  <div>
                      <div className='flex md:flex-row justify-between py-8 px-8 '>
                          <div className='text-center '>
                              <h3 className='text-2xl font-bold '>23</h3>
                              <p className='text-[#2B3035] text-bold'>Scholarships <br /> funded</p>
                          </div>
                          <div className='text-center '>
                              <h3 className='text-2xl font-bold '>1</h3>
                              <p className='text-[#2B3035] text-bold'>Remaining <br />naming right</p>
                          </div>
                      </div>
                      <div className="w-full bg-[#F3EEE2] rounded-full h-2.5 mb-4 dark:bg-[#395241]">
                          <div className="bg-[#395241] w-[65%] h-2.5 rounded-full dark:bg-[#395241]" ></div>
                      </div>
                      <p className='py-1 mb-8 text-center text-[#2B3035]'>$300 more to fund the next scholarships</p>
                  </div>

                  <div>
                      <button className='inline-block px-6 py-2.5 bg-[#395241] text-[#F3EEE2] font-bold text-xl leading-tight rounded shadow-md'>Donate Now</button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Hero