'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#f3f2ef] px-6 py-5 rounded-2xl m-3 mb-0 pr-10 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className=" p-2 rounded-md text-white font-bold text-xl"></div>
          <span className="font-semibold text-xl text-black">
               <Image
                      className="object-cover"
                       src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67a271f113bee3745bf9ac42_logo.svg"
                      alt="Logo" width={120}  height={50} 
                 />
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-base font-medium text-gray-700">
          <a href="#" className="text-black font-semibold">Home V.1</a>
          <a href="#">About V.1</a>
          <a href="#">Contact V.1</a>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Pages <span><AiFillCaretDown /></span>
            </button>

            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 p-2 rounded z-10">
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Page 1</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Page 2</a>
            </div>
          </div>
          <a href="#">Cart (0)</a>
        </nav>

        <div className="hidden md:flex gap-2">
          <button className="bg-white text-black px-5 py-3 border-2 border-white rounded-full text-sm shadow hover:border-[#ff4d00] hover:text-[#ff4d00] transition-colors duration-300">Sign in</button>
          <button className="relative group px-12 py-5 bg-[#f9f8f7] text-white text-sm rounded-3xl overflow-hidden border border-gray-300 text-gray-800 hover:bg-gray-100 transition-all duration-300">
            <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
              Sign Up
            </span>
            <span className="absolute bg-[#ff4d00] inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              Sign Up
            </span>
          </button>
        </div>
        </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <a href="#" className="text-black font-semibold">Home V.1</a>
          <a href="#">About V.1</a>
          <a href="#">Contact V.1</a>
          <div>
            <span className="block">Pages ▼</span>
            <div className="pl-4 mt-1">
              <a href="#" className="block py-1">Page 1</a>
              <a href="#" className="block py-1">Page 2</a>
            </div>
          </div>
          <a href="#">Cart (0)</a>
          <div className="flex flex-col gap-2 mt-2">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm shadow">Sign in</button>
            <button className="bg-[#ff4d00] text-white px-4 py-2 rounded-full text-sm shadow">Sign up</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;