import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function onToggle() {
    setToggle(!toggle);
  }
  
  return (
    <nav className='top-0 z-50 sticky py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container mx-auto px-4 relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img src={logo} className='h-10 w-10 mr-2' alt='logo' />
            <span className='text-white text-xl tracking-tight'> VirtualIR</span>
          </div>
          <ul className='hidden ml-14 lg:flex space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href='#' className='border rounded-md py-2 px-3 hover:bg-gradient-to-r from-orange-500 to-orange-800'>
              Sign in
            </a>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 tracking-tight rounded-md py-2 px-3'>
              Create an account
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={onToggle} >
              {toggle ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {toggle && (
          <div className='lg:hidden w-full bg-neutral-900 z-20 right-0 justify-center items-center fixed flex flex-col p-12'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                  <a href='#'></a>
                  <a href='#'></a>
                </li>
              
              ))}
            </ul>
            <div className='flex space-x-6 mt-2 mr-5'>
              <a href='#' className='border rounded-md py-2 px-3 hover:bg-gradient-to-r from-orange-500 to-orange-800'>
                 Sign in
              </a> 
              <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 tracking-tight rounded-md py-2 px-3'>
                 Create an account
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
