'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className=''>
      {open && (
        <Image
          src='/close.svg'
          alt='close'
          width={32}
          height={32}
          className='cursor-pointer'
          onClick={handleToggleMenu}
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
        <div ref={menuRef} className='absolute p-5 bg-[#fbf8f2] shadow-lg left-0 top-20 w-full flex flex-col gap-8'>
          <Link href='/' className='flex-center cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Home </Link>
          <Link href='/about' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> About </Link>
          <Link href='/programs' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Programs </Link>
          <Link href='/contact' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Contact </Link>
          <Link href='/contact' className='btn-primary w-6/12 md:w-3/12 sm:w-4/12' onClick={handleCloseMenu}> Enroll Your Kid </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
