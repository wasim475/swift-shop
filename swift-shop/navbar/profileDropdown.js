'use client';

import { useState } from "react";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";

const ProfileDropdown = ({user, setUser}) => {
  const [isOpen, setIsOpen] = useState(false);
 

  const handleLogout =()=>{
    localStorage.removeItem("user")
    setUser(null)
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
  
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Profile <FaChevronDown />
      </button>

      
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border p-3 z-50"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="mb-2">
            <h1>{user?.name}</h1>
          </div>
          <p className="text-gray-600 text-sm mb-2">{user?.email}</p>
          <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-all">
            Dashboard
          </button>

          <button onClick={handleLogout} className="w-full mt-2 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
