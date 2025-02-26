import React from 'react';
import header from '../assets/images/more/header.jpg'
import logo from '../assets/images/more/logo1.png'

const Header = () => {
      return (
            <div>
                  <img className='h-[120px] w-full relative object-cover' src={header} alt="" />
                  <div className='flex items-center gap-4 absolute top-0 right-[38%]'>
                        <img className='w-[90px] object-cover' src={logo} alt="" />
                        <h1 className='rancho text-[60px] text-white'>Espresso Emporium</h1>
                  </div>
            </div>
      );
};

export default Header;