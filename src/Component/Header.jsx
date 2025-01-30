import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar flex flex-wrap justify-between items-center px-4 py-3 border-b border-gray-300 bg-white">
      {/* Left Section */}
      <div className="navbar-left flex space-x-4">
        <Link to="/" className="text-gray-800 hover:underline">HOME</Link>
        <Link to="/collections" className="text-gray-800 hover:underline">OUR COLLECTIONS</Link>
        <Link to="/product" className="text-gray-800 hover:underline">PRODUCT</Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center text-center flex-grow">
        <h1 className="text-xl font-serif">BOHO GURL</h1>
      </div>

      {/* Right Section */}
      <div className="navbar-right flex items-center space-x-4 mt-2 md:mt-0">
        {/* Search Input */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="border-b border-gray-300 focus:outline-none focus:border-gray-500 px-2 w-full md:w-auto"
          />
          <i className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">🔍</i>
        </div>

        {/* Icons */}
        <i className="icon-heart cursor-pointer text-lg">❤️</i>
        <Link to="/cart" className="cursor-pointer text-lg"><i>🛒</i></Link>
        <Link to="/login" className="cursor-pointer text-lg"><i>👤</i></Link>
      </div>
    </nav>
  );
};

export default Header;
