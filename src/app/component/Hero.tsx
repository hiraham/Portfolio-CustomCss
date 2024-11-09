"use client";

import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto mt-8 flex items-center">
        {/* Text Section */}
        <div className="w-1/2 pr-8 ">
        
          <h1 className="text-6xl font-extrabold  text-primary leading-tight tracking-wide drop-shadow-md">
            Hello, Im <span className="text-yellow-400">Hira Naz</span>
          </h1>
          
          <p className="text-2xl mt-4 mb-6 leading-relaxed text-gray-200 opacity-90 hover:opacity-100 transition-all duration-300">
            A passionate developer showcasing my portfolio.
          </p>
          <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:bg-yellow-500 hover:-translate-y-1 hover:scale-105">
            View My Work
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img src={'./images/hira.png'} alt="my image" width={600} height={400} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
