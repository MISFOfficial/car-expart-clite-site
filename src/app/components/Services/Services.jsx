'use client'; // 👈 Add this at the very top
import React from 'react';
import userAxiosSecure from '../Hooks/userAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';


const Services = () => {
    const axiosSecure = userAxiosSecure();

    const { data: services = [], isLoading, isError } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services');
            return res.data;
        }
    });

    //   console.log(services)

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
                    <div className='flex justify-between items-center mt-5'>
                        <div>

                            <h1>{item.title}</h1>
                            <p className='text-red-500'>Price: $ {item.price}</p>
                        </div>
                        <div className='text-2xl transform hover:translate-x-2 duration-700 bg-blue-500 text-white rounded-full'>
                            <Link href={`/services/${item._id}`}><MdOutlineNavigateNext /></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
