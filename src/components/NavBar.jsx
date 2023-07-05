import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/products'>PRODUCTS</Link>
      <Link to='/gallery'>GALLERY</Link>
      <Link to='/contact'>CONTACT</Link>
    </nav>
  );
}

