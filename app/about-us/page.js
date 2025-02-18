"use client";

import { FaUsers, FaHandshake, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-gray-600 text-center mb-6">
        Welcome to Swift, your go-to eCommerce platform for seamless online shopping.
        We are dedicated to providing the best quality products with a smooth user experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-gray-100 rounded-lg">
          <FaUsers className="text-green-600 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Our Team</h3>
          <p className="text-gray-500">A passionate team committed to excellence.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <FaHandshake className="text-green-600 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Our Commitment</h3>
          <p className="text-gray-500">Delivering quality products with trust.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <FaRocket className="text-green-600 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Our Vision</h3>
          <p className="text-gray-500">To revolutionize eCommerce for a better future.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
