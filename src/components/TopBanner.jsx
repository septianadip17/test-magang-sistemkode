import React from "react";
import bgColor from "../assets/color.jpg";

const TopBanner = () => {
  return (
    <div
      className="relative w-full h-96 flex items-center mt-5 justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgColor})` }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-lg pb-5 flex flex-col items-center justify-center border-2 border-zinc-300 space-y-4">
          {/* Titles Row */}
          <div className="w-full flex flex-col md:flex-row items-center text-center justify-between border-2 border-zinc-300">
            <div className="w-full">
              <h2 className="text-lg font-semibold py-3 text-white bg-blue-600 mb-2 md:mb-0">
                3-Step Easy Search®
              </h2>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold py-3 text-black bg-gray-100 mb-2 md:mb-0">
                Search by Serial Number
              </h2>
            </div>
          </div>

          {/* Inputs Row */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <SelectInput placeholder="1. Printer Brand" />
            <SelectInput placeholder="2. Printer Series" />
            <SelectInput placeholder="3. Printer Model" />
            <button className="w-full md:w-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600">
              FIND CARTTRIDGES
            </button>
          </div>

          {/* Button Row */}
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

export default TopBanner;
