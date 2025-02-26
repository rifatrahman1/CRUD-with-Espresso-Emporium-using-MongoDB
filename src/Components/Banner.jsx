import React from 'react';
import banner from '../assets/images/more/banner.png'

const Banner = () => {
      return (
            <div className='relative'>
                  <img className='h-[800px] w-full object-cover' src={banner} alt="" />
                  <div className='absolute top-[35%] right-[15%]'>
                        <h1 className='rancho text-[55px] text-white'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='mt-4 text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='rancho text-2xl bg-[#E3B577] px-4 py-1 mt-8 cursor-pointer'>Learn More</button>
                  </div>
            </div>
      );
};

export default Banner;