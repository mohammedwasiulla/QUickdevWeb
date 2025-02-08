import React from 'react';
import "../services.css";  // Import the custom CSS file

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-description">From web development to AI-driven solutions, we do it all. Explore our diverse offerings and find the perfect fit for your needs:</p>

      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-title">Web Development</h3>
          <p>Responsive and scalable web solutions tailored to your business needs, using modern technologies like React, Node.js, and more.</p>
        </div>

        <div className="service-card">
          <h3 className="service-title">UI/UX Design</h3>
          <p>Creating intuitive and engaging user interfaces and experiences to ensure your website or app stands out and is easy to use.</p>
        </div>

        <div className="service-card">
          <h3 className="service-title">E-Commerce Solutions</h3>
          <p>Customized e-commerce websites to drive your online business forward with seamless integration, payment solutions, and user-friendly design.</p>
        </div>

        <div className="service-card">
          <h3 className="service-title">AI & Machine Learning</h3>
          <p>Building AI-driven solutions to automate processes, analyze data, and deliver actionable insights that enhance business performance.</p>
        </div>

        <div className="service-card">
          <h3 className="service-title">API Integration</h3>
          <p>Providing seamless integration with third-party services and APIs to enhance the functionality of your website or application.</p>
        </div>

        <div className="service-card">
          <h3 className="service-title">Website Optimization</h3>
          <p>Enhancing website performance, ensuring fast load times, and improving SEO to boost your online presence.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
