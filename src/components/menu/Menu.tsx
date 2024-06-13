'use client';

import { useState } from 'react';
import Link from 'next/link' 
import Image from 'next/image'

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <div className=''>
      {open && (
        <Image
          src='/close.svg'
          alt='close'
          width={32}
          height={32}
          className='cursor-pointer'
          onClick={handleCloseMenu}
        />
      )}
      {!open && (
        <Image
          src='/menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='cursor-pointer'
          onClick={handleToggleMenu}
        />
      )}
      {open && (
        <div className='absolute p-5 bg-white shadow-lg left-0 top-20 w-full flex flex-col gap-8'>
          <Link href='/' className='flex-center cursor-pointer transition-all hover:font-bold'> Home </Link>
          <Link href='/about' className='cursor-pointer transition-all hover:font-bold'> About </Link>
          <Link href='/programs' className='cursor-pointer transition-all hover:font-bold'> Services </Link>
          <Link href='/contact' className='cursor-pointer transition-all hover:font-bold'> Contact </Link>
          <a
            href="/about"
            className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
          >
            Enroll Your Kid
          </a>
        </div>
      )}
      
    </div>
  )
}

export default Menu