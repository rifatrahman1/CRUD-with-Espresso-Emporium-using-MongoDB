import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const Main_layout = () => {
      return (
            <div>
                  <Header></Header>
                  <Outlet></Outlet>
            </div>
      );
};

export default Main_layout;