import React from "react";

const Search = () => {
  return (
    <div className="container mx-auto ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-zinc-800">CARTRIDGE KINGS</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="SEARCH"
            className="border border-zinc-300 rounded-lg p-2 mr-4"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            CART (1)
          </button>
        </div>
      </div>
      <nav className="bg-blue-600 mx-auto">
        <div className="container mx-auto flex space-x-4 p-2 font-bold text-xs">
          <a
            href="#"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded"
          >
            INK CARTRIDGES
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded"
          >
            TONER CARTRIDGES
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded"
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded"
          >
            LOGIN / REGISTER
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Search;
