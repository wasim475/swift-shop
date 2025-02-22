"use client";
import React, { useState } from "react";
import { Modal, Button, InputNumber } from "antd";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import { saveCartData } from '../../utility';

const ProductDetails = ({ product,onWishlist, onCart, visible, onClose }) => {
  const [quantity, setQuantity] = useState(1);


  return (
    <Modal open={visible} onCancel={onClose} footer={null} width={800}>
      <div className="flex gap-8">
        {/* Left: Product Images */}
        <div className="w-1/3">
          <img
            src={product.imageLink}
            alt={product.name}
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-2 mt-2">
            {/* {product.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt="Thumbnail"
                className="w-14 h-14 border rounded-lg cursor-pointer"
              />
            ))} */}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-2/3">
          <h2 className="text-2xl font-semibold">{product?.name}</h2>
          <p className="text-gray-500">
            <span className="text-green-600 text-lg">${product.price}</span>{" "}
          </p>

          <p className="mt-2">
            <span className="text-white bg-green-500 px-2 py-1 rounded-md text-sm">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <p className="text-gray-600 mt-3">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center gap-4">
           
            <Button
              className="bg-green-500 text-white flex items-center gap-2 px-6 py-2 rounded-md"
              onClick={onCart}
            >
              <HiOutlineShoppingBag className="text-xl" /> Add to Cart
            </Button>
            <button onClick={onWishlist} className="border-2 p-2 rounded-md">
              <CiHeart className="text-2xl text-red-500" />
            </button>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-5">
            <span className="text-gray-600">Share item:</span>
            <FacebookOutlined className="text-xl text-blue-600 cursor-pointer" />
            <TwitterOutlined className="text-xl text-blue-400 cursor-pointer" />
            <InstagramOutlined className="text-xl text-pink-500 cursor-pointer" />
          </div>

          {/* Category & Tags */}
          <p className="mt-4 text-gray-600">
            <strong>Category:</strong> {product?.category?.name}
          </p>
          <p className="mt-2 text-gray-600">
            {/* <strong>Tags:</strong> {product.tags.join(", ")} */}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetails;

