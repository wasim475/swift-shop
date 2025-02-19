"use client";

import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSwift } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdPhoneInTalk } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Search from "./search";
import Link from "next/link";
import NavItem from "./navItem";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(2);
  const cartTotal = 57.0;

  return (
    <main>
      <nav className='bg-gray-800 flex justify-between'>
          <div>
            <p className='text-gray-400 text-sm flex items-center'> <IoLocationOutline/> store location: Dhamrai, Dhaka, Bangladesh.</p>
          </div>
          <div className='text-md text-gray-400'>
            <Link href={"/login"}>Sign In</Link> <span className='px-2'>/</span>
            <Link href={"/signup"}>Sign Up</Link>
          </div>
      </nav>
      <nav className="flex justify-between items-center p-4">
        <Link href={"/"} className="flex items-center text-3xl font-bold text-white">
            <FaSwift className="text-green-600" />{" "}
            <span className="text-gray-300">Swift</span>
        </Link>

        <section className="w-1/3">
          <Search />
        </section>

        <section className="flex items-center space-x-6">
          <div className="relative">
            <CiHeart className="text-3xl text-gray-900" />
          </div>

          <Link href={"/cart"} className="relative flex items-center text-white">
            <HiOutlineShoppingBag className="text-3xl text-gray-900" />
            {cartCount > 0 && (
              <div className="bg-green-700 text-white absolute rounded-full w-5 h-5 flex items-center justify-center -top-2 -right-2 text-xs">
                <p>{cartCount}</p>
              </div>
            )}
          </Link>
          <div className="ml-2">
            <h1 className="text-sm text-gray-400">Shopping Cart</h1>
            <p className="text-xs text-gray-800 font-semibold">
              ${cartTotal.toFixed(2)}
            </p>
          </div>
        </section>
      </nav>
      <hr className="shadow-sm" />
      <nav className="flex justify-around">
        <div>
          <NavItem />
        </div>
        <div className="flex items-center gap-x-5">
          <FiPhoneCall className="text-xl" /> <span>(+880) 171 888 5075</span>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
