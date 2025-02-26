import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
      const [coffees, set_coffees] = useState(null);
      const coffees_data = useLoaderData();
      const { id } = useParams();

      useEffect(() => {
            const coffee = coffees_data.find((coffee) => coffee.id === Number(id));
            console.log(coffee);
            if (coffee) {
                  set_coffees(coffee);
                  console.log('coffee', coffee);
            }
      }, [coffees_data, id]);
      const { name, image, chef, supplier, taste, category, details } = coffees || {};
      return (
            <div className='w-9/12 mx-auto'>
                  <Link to={'/'}>
                        <button className='flex items-center gap-3 text-3xl rancho cursor-pointer text-[#331A15] my-12'><FaArrowLeftLong className='text-xl' /> Back to home</button>
                  </Link>
                  <div className='bg-[#F4F3F0] rounded-l-3xl'>
                        <div className='flex items-center gap-28 px-28 py-20'>
                              <img className='w-[360px]' src={image} alt="" />
                              <div>
                                    <h1 className='text-4xl text-[#331A15] rancho'>Niceties</h1>
                                    <div className='space-y-3 mt-8'>
                                          <p><span className='font-semibold text-black'>Name:</span> {name}</p>
                                          <p><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                                          <p><span className='font-semibold text-black'>Supplier:</span> {supplier}</p>
                                          <p><span className='font-semibold text-black'>Taste:</span> {taste}</p>
                                          <p><span className='font-semibold text-black'>Category:</span> {category}</p>
                                          <p><span className='font-semibold text-black'>Details:</span> {details}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Details;