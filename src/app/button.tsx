"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/index'); // redirect straight to /index
  };

  return (
    <button 
      onClick={handleClick}
      className="group relative px-6 py-2 text-lg font-light text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
      style={{
        fontFamily: 'Apple Garamond, serif'
      }}
    >
      <span className="flex items-center space-x-2">
        <span>Enter</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};

export default Button;
