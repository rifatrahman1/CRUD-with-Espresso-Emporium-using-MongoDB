import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Update_coffee = () => {
      return (
            <div className='w-9/12 mx-auto'>
                  <Link to={'/'}>
                        <button className='flex items-center gap-3 text-3xl rancho cursor-pointer text-[#331A15] my-12'><FaArrowLeftLong className='text-xl' /> Back to home</button>
                  </Link>
                  <div className='bg-[#F4F3F0] px-28 py-20 rounded-lg'>
                        <div className='text-center'>
                              <h1 className='text-[45px] rancho text-[#374151]'>Update Existing Coffee Details</h1>
                              <p className='text-[#1B1A1AB3] text-lg mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                        </div>
                        <div className='space-y-6 mt-8'>
                              <div className='flex items-center gap-9'>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Name</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee name' id="" />
                                    </div>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Chef</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee chef' id="" />
                                    </div>
                              </div>
                              <div className='flex items-center gap-9'>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Supplier</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee supplier' id="" />
                                    </div>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Taste</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee taste' id="" />
                                    </div>
                              </div>
                              <div className='flex items-center gap-9'>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Category</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee category' id="" />
                                    </div>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Details</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="" placeholder='Enter coffee details' id="" />
                                    </div>
                              </div>
                              <div className='w-full'>
                                    <p className='text-xl font-semibold'>Photo</p>
                                    <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="url" name="" placeholder='Enter photo URL' id="" />
                              </div>
                              <Link>
                                    <button className='w-full bg-[#D2B48C] cursor-pointer py-3 text-2xl rounded-lg text-[#331A15] rancho border-2 border-[#331A15]'>Update Coffee Details</button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Update_coffee;