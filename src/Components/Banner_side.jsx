import React from 'react';
import coffee from '../assets/images/icons/coffee.png';
import award from '../assets/images/icons/award.png';
import grades from '../assets/images/icons/grades.png';
import roasting from '../assets/images/icons/roasting.png';

const Banner_side = () => {
      return (
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14'>
                  <div>
                        <img src={coffee} alt="" />
                        <h3 className='rancho mt-4 text-4xl'>Awesome Aroma</h3>
                        <p className='mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
                  </div>
                  <div>
                        <img src={award} alt="" />
                        <h3 className='rancho mt-4 text-4xl'>High Quality</h3>
                        <p className='mt-2'>We served the coffee to you maintaining the best quality</p>
                  </div>
                  <div>
                        <img src={grades} alt="" />
                        <h3 className='rancho mt-4 text-4xl'>Pure Grades</h3>
                        <p className='mt-2'>The coffee is made of the green coffee beans which you will love</p>
                  </div>
                  <div>
                        <img src={roasting} alt="" />
                        <h3 className='rancho mt-4 text-4xl'>Proper Roasting</h3>
                        <p className='mt-2'>Your coffee is brewed by first roasting the green coffee beans</p>
                  </div>
            </div>
      );
};

export default Banner_side;