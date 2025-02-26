import React from 'react';
import one from '../assets/images/cups/Rectangle 9.png';
import two from '../assets/images/cups/Rectangle 10.png';
import three from '../assets/images/cups/Rectangle 11.png';
import four from '../assets/images/cups/Rectangle 12.png';
import five from '../assets/images/cups/Rectangle 13.png';
import six from '../assets/images/cups/Rectangle 14.png';
import seven from '../assets/images/cups/Rectangle 15.png';
import eight from '../assets/images/cups/Rectangle 16.png';

const Follow = () => {
      return (
            <div className='mt-32 w-8/12 mx-auto'>
                  <div className='text-center'>
                        <p>Follow Us Now</p>
                        <h1 className='text-[55px] mt-4 text-amber-950 rancho'>Follow on Instagram</h1>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                        <img src={five} alt="" />
                        <img src={six} alt="" />
                        <img src={seven} alt="" />
                        <img src={eight} alt="" />
                  </div>
            </div>
      );
};

export default Follow;