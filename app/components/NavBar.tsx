"use client"; // Add this line

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f167a87a] shadow-md my-2 absolute top-0 w-[calc(100%-16px)] left-2 right-2 rounded-lg mx-auto z-20 max-w-5xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              GoodayOn!
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#home" className="hover:text-[#f7e93e]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#f7e93e]">
              About
            </Link>
            <Link href="#blogs" className="hover:text-[#f7e93e]">
              Blogs
            </Link>
            <Link href="#contact" className="hover:text-[#f7e93e]">
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex">
            <button className="bg-[#E20E80] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#f5761e]">
              Download App
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
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
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              About
            </Link>
            <Link
              href="#blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Blogs
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Contact Us
            </Link>
            <button className="bg-[#E20E80] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#e56dac]">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
