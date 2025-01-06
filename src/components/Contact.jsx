// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="bg-[#545454] text-white py-10 mb-16">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8">I'd love to hear from you. Reach out for collaborations or queries.</p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#f9b449] text-[#545454] font-semibold rounded-lg shadow-md hover:bg-white transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
