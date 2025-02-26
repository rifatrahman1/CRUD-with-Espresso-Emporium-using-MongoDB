import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffee = ({ coffee }) => {
      const { id, name, chef, price, image } = coffee || {};
      const handle_delete = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                        confirmButton: "btn btn-success",
                        cancelButton: "btn btn-danger"
                  },
                  buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                  title: "Are you sure?",
                  text: "Are you sure that you want to delete it ?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Yes, delete it!",
                  cancelButtonText: "No, cancel!",
                  reverseButtons: true
            }).then((result) => {
                  if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire({
                              title: "Good Luck!!!",
                              text: "Deleted coffee details.",
                              icon: "success"
                        });
                  } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                  ) {
                        swalWithBootstrapButtons.fire({
                              title: "Cancelled",
                              text: "Your imaginary file is safe :)",
                              icon: "error"
                        });
                  }
            });
      }
      return (
            <div className='flex items-center justify-between  bg-[#F5F4F1] px-12 py-7'>
                  <img className='w-[185px] h-[239px]' src={image} alt="" />
                  <div className='text-[#5C5B5B] space-y-2'>
                        <p><span className='font-semibold text-black'>Name:</span> {name}</p>
                        <p><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                        <p><span className='font-semibold text-black'>Price:</span> {price} Taka</p>
                  </div>
                  <div className='space-y-3.5'>
                        <Link to={`/details/${id}`}>
                              <div className='bg-[#D2B48C] p-2 mb-3.5 rounded-lg'>
                                    <FaRegEye className='text-white ' />
                              </div>
                        </Link>
                        <Link to={'/update_coffee'}>
                              <div className='bg-black p-2 rounded-lg mb-3.5'>
                                    <IoPencil className='text-white ' />
                              </div>
                        </Link>
                        <Link>
                              <button onClick={handle_delete} className='bg-red-500 cursor-pointer p-2 rounded-lg'>
                                    <MdDelete className='text-white ' />
                              </button>
                        </Link>
                  </div>
            </div>
      );
};

export default Coffee;