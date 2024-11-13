"use client";

import React from 'react';
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <section className="hero-container">
        
        {/* Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I&apos;m <span className="highlight">Hira Naz</span>
          </h1>
          
          <p className="hero-description">
            A passionate developer showcasing my portfolio.
          </p>
          
          <button className="hero-button">
            View My Work
          </button>
        </div>
        
        {/* Image Section */}
        <div className="hero-image">
          <Image src="/images/hira.png" alt="my image" width={600} height={400} />
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
