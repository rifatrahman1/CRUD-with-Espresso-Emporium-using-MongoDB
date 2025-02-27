import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { LuCoffee } from 'react-icons/lu';
import './Product.css'
import Coffee from './Coffee';

const Coffees = () => {
      const loaded_coffees = useLoaderData();
      const [coffees, set_coffees] = useState(loaded_coffees);    
      return (
            <div className='bg-custom min-h-screen w-full mt-32'>
                  <div className='text-center'>
                        <p className='text-xl'>--- Sip & Savor ---</p>
                        <h1 className='rancho text-[55px] mt-2 text-amber-950'>Our Popular Products</h1>
                        <Link to={'add_coffee'}><button className='flex items-center mx-auto gap-2.5 bg-[#E3B577] px-5 py-2 rounded-lg text-white text-2xl rancho mt-4 hover:border border-amber-950 duration-100 cursor-pointer'>Add Coffee<LuCoffee className='text-amber-800' /></button></Link>
                  </div>
                  <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                              coffees.map((coffee) => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} set_coffees={set_coffees}></Coffee>)
                        }
                  </div>
            </div>
      );
};

export default Coffees;