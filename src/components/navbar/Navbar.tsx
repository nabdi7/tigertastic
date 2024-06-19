import React from "react";
import Link from 'next/link' 
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="relative z-30 bg-[#fbf8f2] ">
      <div className="container custom-screen flex items-center justify-between px-6 py-4 mx-auto ">
        <div className="text-3xl font-semibold text-[#df0059ff] flex items-center">
          <Link href='/' className='flex items-center cursor-pointer'> <Image src="/block1.png" width={72} height={72} alt="logo" className="pr-2"/> Tigertastic</Link> {/* width={72} height={72} */}
        </div>
        <div className='lg:hidden'>
            <Menu />
          </div>
        <ul className="hidden lg:flex space-x-6 text-gray-600">
            <Link href='/' className='flex-center cursor-pointer transition-all hover:text-[#df0059ff]'> Home </Link>
            <Link href='/about' className='flex-center cursor-pointer transition-all hover:text-[#df0059ff]'> About </Link>
            <Link href='/programs' className='flex-center cursor-pointer transition-all hover:text-[#df0059ff]'> Programs </Link>
            <Link href='/contact' className='flex-center cursor-pointer transition-all hover:text-[#df0059ff]'> Contact </Link>
        </ul>
        <div className='hidden lg:flex items-center gap-8 '>
          <Link href='/contact' className="btn-primary"> Enroll Your Kid </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
