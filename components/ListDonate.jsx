import React from 'react';
import { data } from '../data/data.js';
import { FaWallet } from 'react-icons/fa';

const ListDonate = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>History Donasi</h1>
      <ul>
        {data.map((donate, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-gray-200 rounded-lg p-3'>
              <FaWallet className='text-gray-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>Rp{donate.total}</p>
              <p className='text-gray-400 text-sm'>{donate.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{donate.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDonate;
