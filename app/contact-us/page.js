"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Input, Button } from "antd";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-gray-600 text-center mb-6">
        Have questions? Reach out to us and we’ll get back to you as soon as possible.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <span className="text-gray-700">+880 1718 885 075</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-green-600 text-xl" />
            <span className="text-gray-700">wasim.hossain005@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <span className="text-gray-700">C11 Dhamrai, Dhaka, Bangladesh</span>
          </div>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input.TextArea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-green-600 hover:bg-green-700 border-none"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
