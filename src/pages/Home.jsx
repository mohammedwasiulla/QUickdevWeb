import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/home.jpg)' }}></div>

      <div className="relative z-10 text-center px-6 py-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-100 mb-4">
          Welcome to Our Quick Dev Web Solutions
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Your trusted partner in driving digital transformation through innovative web development solutions.
        </p>
        
        {/* Using Link for navigation */}
        <Link
          to="/services"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-500 transition-all"
        >
          Explore Our Services
        </Link>
      </div>

      
    </div>
  );
};

export default Home;
