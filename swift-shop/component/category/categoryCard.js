"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { saveCartData, savewishlistData } from '../../utility';

const CategoryCard = ({ item }) => {
  const { name, price, imageLink, description, inStock } = item;
  const handleCart = (cartData)=>{
    const {name, price, imageLink, _id }= cartData
    const cartInfo = {name, price, imageLink, id: _id}
    saveCartData(cartInfo)
  }
  const handleWishlist = (WishListData)=>{
    console.log(WishListData)
    const {name, price, imageLink, _id}= WishListData
    const wishlistInfo = {name, price, imageLink, id:_id}
    savewishlistData(wishlistInfo)
  }
  return (
    <>
      <div className="max-w-xs p-3 group rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 relative overflow-hidden hover:scale-105 hover:overflow-hidden delay-100 hover:shadow-xl">
        <img
          src={imageLink}
          alt=""
          className=" object-center w-full rounded-md h-60 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">${price}</h2>
        </div>
        <div className="w-full h-full opacity-0 transition-opacity delay-75 duration-100 absolute top-0 left-0 bg-gray-800 group-hover:opacity-50 rounded-md flex flex-col justify-between items-center shadow-lg">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-200 flex flex-col gap-2">
            <button onClick={()=>handleCart(item)} className="bg-white text-black px-4 py-1 rounded-md shadow -mr-10">
              <HiOutlineShoppingBag className="text-3xl text-gray-900" />
            </button>

            <button onClick={()=>handleWishlist(item)} className="bg-white text-black px-4 py-1 rounded-md shadow absolute top-10 right-0">
              <CiHeart className="text-3xl text-gray-900" />
            </button>
          </div>

          {/* View Button (Bottom Center) */}
          <div className=''>
            <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-200">
              View
            </button>
          </div>
        </div>
        <p className="dark:text-gray-800">{inStock} In Stock</p>

        
      </div>
    </>
  );
};

export default CategoryCard;
