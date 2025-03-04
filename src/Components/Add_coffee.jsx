import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Add_coffee = () => {
      const handle_add_coffee = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const new_coffee = { name, chef, supplier, taste, category, details, photo }
            console.log(new_coffee);

            fetch('https://coffee-store-server-jade-nine.vercel.app/coffee', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(new_coffee)
            })
                  .then(res => res.json())
                  .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    title: 'Success!',
                                    text: 'User Added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                              })
                        }
                  })
            form.reset();

      }
      return (
            <div className='w-9/12 mx-auto'>
                  <Link to={'/'}><button className='flex items-center gap-3 text-3xl rancho cursor-pointer text-[#331A15] my-12'><FaArrowLeftLong className='text-xl' /> Back to home</button></Link>
                  <div className='bg-[#F4F3F0] px-28 py-20 rounded-lg'>
                        <div className='text-center'>
                              <h1 className='text-[45px] rancho text-[#374151]'>Add New Coffee</h1>
                              <p className='text-[#1B1A1AB3] text-lg mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                        </div>
                        <form onSubmit={handle_add_coffee}>
                              <div className='space-y-6 mt-8'>
                                    <div className='flex items-center gap-9'>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Name</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="name" placeholder='Enter coffee name' id="" />
                                          </div>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Chef</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="chef" placeholder='Enter coffee chef' id="" />
                                          </div>
                                    </div>
                                    <div className='flex items-center gap-9'>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Supplier</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="supplier" placeholder='Enter coffee supplier' id="" />
                                          </div>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Taste</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="taste" placeholder='Enter coffee taste' id="" />
                                          </div>
                                    </div>
                                    <div className='flex items-center gap-9'>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Category</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="category" placeholder='Enter coffee category' id="" />
                                          </div>
                                          <div className='w-full'>
                                                <p className='text-xl font-semibold'>Details</p>
                                                <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="text" name="details" placeholder='Enter coffee details' id="" />
                                          </div>
                                    </div>
                                    <div className='w-full'>
                                          <p className='text-xl font-semibold'>Photo</p>
                                          <input className='w-full bg-white p-2.5 border-none text-[#1B1A1A99] mt-4 rounded-lg' type="url" name="photo" placeholder='Enter photo URL' id="" />
                                    </div>
                                    <button className='w-full bg-[#D2B48C] cursor-pointer py-3 text-2xl rounded-lg text-[#331A15] rancho border-2 border-[#331A15]'>Add Coffee</button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Add_coffee;