import React, { useState } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = ()=> setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-[#395241] fixed drop-shadow-2xl'>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className='flex items-center'>
          <div>
            <p className='font-light ml-5 text-white sm:text-4xl'>DirectEd {/* <span className='text-lg'>Realising Potential</span> */}</p>
            
          </div>
          
        </div>
        <ul className="hidden md:flex mr-60 text-white font-light space-x-20 ">
          <li>SCHOLARSHIP POOL</li>
          <li>SCHOLARS' PROGRESS</li>
          <li>TRANSACTIONS</li>
          <div>
            <button className='mt-1'><ConnectWallet accentColor='#F3EEE2'/></button>
          </div>
        </ul>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-10 text-white' mr-5/> : <XIcon className='w-10 text-white' mr-5/> }
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute  bg-emerald-800 w-full px-8'}>
        <li className='border-b bg-emerald-800 w-full'>SCHOLARSHIP POOL</li>
        <li className='border-b bg-emerald-800 w-full'>SCHOLARS' PROGRESS</li>
        <li className='border-b bg-emerald-800 w-full'>TRANSACTIONS</li>
        <div className='flex flex-col my-4'>
          <button className='px-8 py-3 '><ConnectWallet accentColor='#F3EEE2' colorMode='dark' /></button>
        </div>
      </ul>
    </div>
      
  )
}

export default Navbar