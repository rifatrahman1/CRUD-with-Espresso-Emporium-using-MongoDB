import React from 'react';
import logo from '../assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaVoicemail } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import './Footer.css'

const Footer = () => {
      return (
            <div>
                  <div className='footer1'>
                        <div className='mt-32 flex items-center justify-between pt-32 pb-12 w-9/12 mx-auto'>
                              <div>
                                    <img className='w-[90px] object-cover' src={logo} alt="" />
                                    <h1 className='text-[45px] mt-6 rancho text-[#331A15]'>Espresso Emporium</h1>
                                    <p className='text-xl text-[#1B1A1A] mt-8'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                                    <div className='flex items-center text-[40px] gap-4.5 text-[#331A15] mt-8'>
                                          <FaFacebook />
                                          <FaTwitter />
                                          <FaInstagram />
                                          <FaLinkedin />
                                    </div>
                                    <p className='text-[45px] mt-8 rancho'>Get in Touch</p>
                                    <div className='my-5 space-y-3'>
                                    <div className='flex items-center gap-6'>
                                          <FaPhone></FaPhone>
                                          <p>+88 01533 333 333</p>
                                    </div>
                                    <div className='flex items-center gap-6'>
                                          <FaVoicemail />
                                          <p>info@gmail.com</p>
                                    </div>
                                    <div className='flex items-center gap-6'>
                                          <FaMapLocation />
                                          <p>72, Wall street, King Road, Dhaka</p>
                                    </div>
                                    </div>
                              </div>
                              <div>
                                    <h1 className='text-[45px] text-[#331A15] rancho'>Connect with Us</h1>
                                    <form >
                                          <input className='w-full h-12 bg-white border-none text-[#1B1A1A99] p-4 rounded-lg mt-8' type="text" name="text" placeholder='Name' id="" />
                                          <br />
                                          <input className='w-full h-12 bg-white border-none text-[#1B1A1A99] p-4 rounded-lg mt-4'  type="email" name="email" placeholder='Email' id="" />
                                          <br />
                                          <textarea className='w-full h-32 bg-white border-none text-[#1B1A1A99] p-4 rounded-lg mt-4'  name="" id="" placeholder='Message' cols="50"></textarea>
                                          <br />
                                          <button className='text-2xl border border-[#331A15] text-[#331A15] rancho px-5.5 cursor-pointer py-2.5 rounded-[30px] mt-6'>Send Message</button>
                                    </form>
                              </div>
                        </div>
                  </div>
                  <div className='footer2 text-center text-white py-3 rancho text-xl'>
                              <p>Copyright Espresso Emporium ! All Rights Reserved</p>
                  </div>
            </div>


      );
};

export default Footer;