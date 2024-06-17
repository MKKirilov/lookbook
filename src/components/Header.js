import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Fashion Lookbook</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">View Gallery</Link>
        <Link to="/about">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;