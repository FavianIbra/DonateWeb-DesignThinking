import React from 'react';
import Link from 'next/link';
import { RxHome } from 'react-icons/rx';


const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-gray-800 text-white p-3 rounded-lg inline-block'>
              <RxHome size={20} />
            </div>
          </Link>
          
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
