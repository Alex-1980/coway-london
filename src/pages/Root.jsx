import React from 'react';
import NavBar from '../components/NavBar';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div className='max-w-5xl mx-auto'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}