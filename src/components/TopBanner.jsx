import React from "react";
import bgColor from "../assets/color.jpg";

const TopBanner = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center mt-5 justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgColor})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center ">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* 3-Step Easy Search */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              3-Step Easy Search®
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
              <SelectInput placeholder="1. Printer Brand" />
              <SelectInput placeholder="2. Printer Series" />
              <SelectInput placeholder="3. Printer Model" />
            </div>
          </div>

          {/* Search by Serial Number */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Search by Serial Number
            </h2>
            <Button label="FIND CARTRIDGES" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Select Input Component
const SelectInput = ({ placeholder }) => (
  <select className="w-full md:w-auto p-2 border border-gray-300 rounded">
    <option>{placeholder}</option>
  </select>
);

// Reusable Button Component
const Button = ({ label }) => (
  <button className="w-full md:w-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600">
    {label}
  </button>
);

export default TopBanner;
