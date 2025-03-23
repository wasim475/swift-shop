"use client"
import React from "react";
import { Carousel } from "antd";
import Link from 'next/link';

const carouselData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599664223843-9349c75196bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Canon EOS 90D",
    details: "Coming Soon!",
    buttonText: "See products",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: " Premium Wireless Headphones",
    details: "Experience immersive sound with deep bass, active noise cancellation, and a comfortable fit. Enjoy seamless Bluetooth connectivity and long battery life.",
    buttonText: "See Products",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Polaroid Snap Instant Camera",
    details: "This name captures the essence of Polaroid’s instant photo heritage while sounding modern and appealing.",
    buttonText: "See Products",
  },
];

const HomeCarousel = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-222px)] bg-gray-100 py-2">
      <div className=" w-full px-32">
        <Carousel autoplay>
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-500 ease-in-out transform"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{item.details}</p>
                 <Link href={'/products'}>
                 <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
                    {item.buttonText}
                  </button>
                 </Link>
                </div>
                <div className="col-span-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-lg shadow-md p-2 shadow-xl rounded-md hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
