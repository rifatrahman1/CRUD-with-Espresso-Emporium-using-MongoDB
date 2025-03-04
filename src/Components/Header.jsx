import React from 'react';
import header from '../assets/images/more/header.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <div>
                  <img className='h-[120px] w-full relative object-cover' src={header} alt="" />
                  <div className='flex items-center gap-4 absolute top-0 right-[38%]'>
                        <img className='w-[90px] object-cover' src={logo} alt="" />
                        <h1 className='rancho text-[60px] text-white'>Espresso Emporium</h1>
                        <div>
                              <Link to={'/users'} className='text-right text-white absolute -right-20 text-2xl font-medium rancho'>Users</Link>
                        </div>
                        <div>
                              <Link to={'/signin'} className='text-right text-white absolute -right-40 text-2xl font-medium rancho'>SignIn</Link>
                        </div>
                  </div>
            </div>
      );
};

export default Header;