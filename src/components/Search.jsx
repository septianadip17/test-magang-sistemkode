import React from "react";
import { FiSearch } from "react-icons/fi";
import kingLogo from "../assets/kinglogo.png";

const NavbarLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-white text-center hover:bg-blue-500 hover:text-white px-3 py-2"
  >
    {children}
  </a>
);

const Search = () => {
  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={kingLogo} alt="king logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-zinc-800">CARTRIDGE KINGS</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="border border-zinc-300 rounded-lg p-2 pr-10 mr-4"
            />
            <FiSearch className="absolute top-1/2 right-6 transform -translate-y-1/2 text-zinc-500" />
          </div>
          <button className="bg-orange-500 shadow-lg text-white px-10 py-2 rounded-xs">
            CART (1)
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="bg-blue-600">
        <div className="container mx-auto flex justify-center space-x-0 font-bold text-xs p-2">
          <NavbarLink href="#">HOME</NavbarLink>
          <NavbarLink href="#">INK CARTRIDGES</NavbarLink>
          <NavbarLink href="#">TONER CARTRIDGES</NavbarLink>
          <NavbarLink href="#">CONTACT US</NavbarLink>
          <NavbarLink href="#">LOGIN / REGISTER</NavbarLink>
        </div>
      </nav>
    </div>
  );
};

export default Search;
