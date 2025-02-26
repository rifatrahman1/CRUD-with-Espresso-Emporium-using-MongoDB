import React from 'react';
import Banner from './Banner';
import Banner_side from './banner_side';
import Coffees from './Coffees';
import Follow from './Follow';
import Footer from './Footer';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <div className='bg-[#ECEAE3]'>
                        <Banner_side></Banner_side>
                  </div>
                  <div>
                        <Coffees></Coffees>
                  </div>
                  <div>
                        <Follow></Follow>
                  </div>
                  <div>
                        
                  </div>
            </div>
      );
};

export default Home;