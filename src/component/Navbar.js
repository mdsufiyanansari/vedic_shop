import React, { useState } from 'react';
import { RiSearchEyeLine } from "react-icons/ri";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="h-24 fixed z-50 shadow-xl p-1 flex gap-32 bg-white w-screen center">
        <div className="flex items-center space-x-4">
          <img 
            src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000751_online_worldwide_e-commerce_logo_design-01.png" 
            alt="Logo" 
            className='h-full w-32 object-contain' 
          />
          <h1 className="text-2xl font-bold">
            <span className='text-3xl text-blue-600'>V</span>edic_Sho<span className='text-3xl text-blue-600'>p</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className='text-xl font-semibold flex space-x-4'>
          <li className='cursor-pointer hover:text-gray-800 '>Home</li>
            <li className='cursor-pointer hover:text-gray-800 '>About</li>
            <li className='cursor-pointer hover:text-gray-800 '>Products</li>
            <li className='cursor-pointer hover:text-gray-800 '>Contact</li>
            <li className='cursor-pointer hover:text-gray-800 '>Cart</li>
            <li className='cursor-pointer hover:text-gray-800 '>Login</li>
            <li className='cursor-pointer hover:text-gray-800 '>Signup</li>
          </ul>
        </div>

        <div className=" md:flex center h-full w-[30%] relative">
          <input 
            type="text" 
            className="outline-none  w-full h-[60%] rounded-md text-xl px-4 bg-blue-100 text-white opacity-75" 
            placeholder='Search for Products , Brands and More ' 
          />
          <RiSearchEyeLine className='absolute right-4 text-2xl ' />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
            <svg 
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
        <ul className='text-lg font-semibold space-y-4 p-4'>
          <li className='cursor-pointer hover:text-gray-800'>Home</li>
          <li className='cursor-pointer hover:text-gray-800'>About</li>
          <li className='cursor-pointer hover:text-gray-800'>Products</li>
          <li className='cursor-pointer hover:text-gray-800'>Contact</li>
          <li className='cursor-pointer hover:text-gray-800'>Cart</li>
          <li className='cursor-pointer hover:text-gray-800'>Login</li>
          <li className='cursor-pointer hover:text-gray-800'>Signup</li>
        </ul>
        <div className="mt-4 flex justify-center">
          <input 
            type="text" 
            className="outline-none border border-black w-64 h-10 text-xl px-4 bg-black text-white opacity-75" 
            placeholder='Search...' 
          />
        </div>
      </div>
    </>
  )
}

export default Navbar;
