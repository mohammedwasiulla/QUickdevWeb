import React from 'react';
import "../about.css";  // Import the custom CSS file

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-heading">About Us</h2>
      <p className="about-description">
        At Quick Dev Web, we are passionate about providing innovative IT solutions that help businesses grow and succeed. 
        With years of experience in web development, UI/UX design, and cutting-edge technologies, we strive to deliver customized solutions 
        that meet the unique needs of each client.
      </p>

      <div className="developer-image">
        <img
          src="wasi.jpeg" // Add your developer image here
          alt="Developer"
          className="developer-img"
        />
      </div>

      <p className="about-description">
        Our mission is to bridge the gap between technology and business. We believe that technology should empower businesses, 
        not complicate them. That's why we focus on creating simple, intuitive, and effective solutions.
      </p>

      <div className="about-values">
        <h3 className="about-values-heading">Our Values:</h3>
        <ul className="about-values-list">
          <li>Innovation: Always looking for new and better ways to solve problems.</li>
          <li>Quality: Delivering high-quality products that exceed client expectations.</li>
          <li>Customer Focus: Prioritizing the needs and satisfaction of our clients.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
