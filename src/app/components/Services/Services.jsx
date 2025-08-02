'use client'; // 👈 Add this at the very top

import React from 'react';
import userAxiosSecure from '../Hooks/userAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
  const axiosSecure = userAxiosSecure();

  const { data: services = [], isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosSecure.get('/services');
      return res.data;
    }
  });

  console.log(services)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className='grid grid-cols-12 place-items-center content-center gap-5'>
      {services.map((item) => (
        <div
          key={item._id}
          className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-200 p-5 rounded'
        >
          <img
            className='w-[324px] h-[208px]'
            src={item.img}
            alt={item.title}
          />
          <h1>{item.title}</h1>
          <p className='text-red-500'>Price: $ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
