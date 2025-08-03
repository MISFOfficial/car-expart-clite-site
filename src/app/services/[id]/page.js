'use client'
import userAxiosSecure from '@/app/components/Hooks/userAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const page = ({ params }) => {

    const paramsId = useParams()

    const id = paramsId?.id
    console.log(id)

    const axiosSecure = userAxiosSecure()

    const { data: service } = useQuery({
        queryKey: ['service', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`services/${id}`)
            return res.data
        }
    })

    console.log(service)

    return (
        <section>
            <div className='relative rounded'>
                <img className='w-full'
                    src='/assets/images/checkout/checkout.png' alt='banner'></img>
                <div className='border absolute top-0 left-0 h-full w-full bg-[#00000079]  content-center rounded-xl'>
                    <h1 className='text-4xl font-bold text-white pl-20'>Service Details</h1>
                </div>
            </div> 
            <div className='flex mt-5 gap-10'>
                {/* <Image className='flex-2/3'
                  src={service?.img} alt={service?.title}/> */}
                <img className='flex-2/3'
                src={service?.img} alt={service?.title}></img>
                <div className='flex-1/3  text-center '>
                    <h1 className=' bg-yellow-500 p-4'>Checkout</h1>
                    <p className='font-bold text-lg mt-5'>Price: ${service?.price}</p>
                </div>
            </div>
        </section>
    );
};

export default page;