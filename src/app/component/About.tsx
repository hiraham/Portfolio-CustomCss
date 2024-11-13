import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      {/* About Section */}
      <section id="about">
        <div className="content">
          <h1 className="title">About</h1>
          <h2 className="subtitle">About Me</h2>
          <div className="text-content">
            <h3 className="heading">Who We Are</h3>
            <p className="paragraph">
              We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. With a focus on innovation and quality, we strive to bring your ideas to life and help your business succeed in the digital landscape.
            </p>
            <h3 className="heading">Our Mission</h3>
            <p className="paragraph">
              Our mission is to empower businesses with the tools and technologies they need to thrive in the digital age. We aim to deliver innovative solutions that enhance user engagement and drive growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
