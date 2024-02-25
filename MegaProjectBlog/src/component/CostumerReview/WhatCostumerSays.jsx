import React from 'react';

const RoundBlock = () => {
  return (
    <div className="bg-white rounded- shadow-lg p-8 mx-auto max-w-md">
      <div className=" items-center mb-6">
        <div className="w-16 h-16 mr-4 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle w-8 h-8 text-green-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div>
          <p className="text-xl font-bold mb-2">"LusDen magna aliqua."</p>
          <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <blockquote className="text-2xl font-bold italic text-center text-gray-800 border-l-4 pl-4 border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-quote-right inline-block w-6 h-6 mb-1 mr-1 text-gray-800"
        >
          <path d="M9 11l15 15-15 15"></path>
        </svg>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </blockquote>
    </div>
  );
};

export default RoundBlock;