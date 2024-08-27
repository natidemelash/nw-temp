"use client"; // Add this line

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f167a87a] shadow-md mx-8 my-2 fixed top-0 left-0 rounded-lg w-[60%] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Now UI PRO
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#pages" className="hover:text-gray-600">
              Pages
            </Link>
            <Link href="#account" className="hover:text-gray-600">
              Account
            </Link>
            <Link href="#blocks" className="hover:text-gray-600">
              Blocks
            </Link>
            <Link href="#docs" className="hover:text-gray-600">
              Docs
            </Link>
          </div>
          <div className="hidden md:flex">
            <button className="bg-[#E20E80] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#e25e85]">
              Dowload App
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#pages"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Pages
            </Link>
            <Link
              href="#account"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Account
            </Link>
            <Link
              href="#blocks"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Blocks
            </Link>
            <Link
              href="#docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Docs
            </Link>
            <button className="block w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
