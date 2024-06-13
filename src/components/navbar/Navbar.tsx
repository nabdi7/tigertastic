import React from "react";
import Link from 'next/link' 
import Menu from '@/components/menu/Menu'

const Navbar = () => {
  return (
    <nav className="relative z-30">
      <div className="container custom-screen flex items-center justify-between px-6 py-4 mx-auto mt-6">
        <div className="text-2xl font-semibold text-gray-800">
          <Link href='/' className='flex-center cursor-pointer'> Tigertastic </Link>
        </div>
        <div className='lg:hidden'>
            <Menu />
          </div>
        <ul className="hidden lg:flex space-x-6 text-gray-600">
            <Link href='/' className='flex-center cursor-pointer transition-all hover:font-bold'> Home </Link>
            <Link href='/about' className='flex-center cursor-pointer transition-all hover:font-bold'> About </Link>
            <Link href='/programs' className='flex-center cursor-pointer transition-all hover:font-bold'> Services </Link>
            <Link href='/contact' className='flex-center cursor-pointer transition-all hover:font-bold'> Contact </Link>
        </ul>
        <div className='hidden lg:flex items-center gap-8 '>
          <Link href='/contact' className="px-6 py-2.5 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"> Enroll Your Kid </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
