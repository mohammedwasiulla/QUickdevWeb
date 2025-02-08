import React, { useState } from 'react';

const Contact = () => {
  // State for tracking form submission
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (clear form and show thank you message)
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);

    // In a real-world scenario, you would send the form data to an API here.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-400 mb-4">
          Have questions or need assistance? Feel free to reach out to us!
        </p>
        
        {/* Displaying Thank You message after form submission */}
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Thank You!</h3>
            <p className="text-lg">Our company will get back to you soon.</p>
          </div>
        ) : (
          <>
            {/* Contact Information */}
            <div className="text-center mb-6">
              <p className="text-lg">📧 Email: <a href="mailto:contact@QDWcompany.com" className="text-blue-400 hover:underline">contact@QDWcompany.com</a></p>
              <p className="text-lg">📞 Phone: <a href="tel:+123456789" className="text-blue-400 hover:underline">+123456789</a></p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                rows="4" 
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-all">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
