import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import hp62 from "../assets/hp62.jpg";
import canon from "../assets/canontoner.jpg";

const ProductCard = ({ imgSrc, altText, name, code, price, discountPrice }) => {
  return (
    <div className="shadow-md rounded-lg p-4 text-center border-2 border-zinc-300">
      <div className="mb-4 bg-gray-400 border-2 border-zinc-300">
        <img src={imgSrc} alt={altText} className="mx-auto mb-2" />
      </div>
      <div className="mb-4 text-start">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-zinc-600">({code})</p>
      </div>
      <div className="flex border-2 border-zinc-300 justify-between items-center">
        <div className="flex flex-col">
          {discountPrice && (
            <p className="text-sm line-through font-bold">${price}</p>
          )}
          <p
            className={`text-lg font-bold ${
              discountPrice ? "text-red-500" : ""
            }`}
          >
            ${discountPrice || price}
          </p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2 hover:bg-orange-600">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const Featured = () => {
  const products = [
    {
      imgSrc: hp62,
      altText: "HP 62 Black Ink Cartridge",
      name: "HP 62 Black Ink Cartridge",
      code: "HPC2P04AE",
      price: "9.49",
    },
    {
      imgSrc: canon,
      altText: "Canon MF-3110 Toner",
      name: "Canon MF-3110 Toner",
      code: "C2P204AE",
      price: "36.45",
    },
    {
      imgSrc: hp62,
      altText: "HP 62 Black Ink Cartridge",
      name: "HP 62 Black Ink Cartridge",
      code: "HPC2P04AE",
      price: "9.49",
      discountPrice: "5.99",
    },
    {
      imgSrc: canon,
      altText: "Canon MF-3110 Toner",
      name: "Canon MF-3110 Toner",
      code: "C2P204AE",
      price: "36.45",
    },
    {
      imgSrc: hp62,
      altText: "HP 62 Black Ink Cartridge",
      name: "HP 62 Black Ink Cartridge",
      code: "HPC2P04AE",
      price: "9.49",
      discountPrice: "5.99",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < products.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const displayedProducts = products.slice(activeIndex, activeIndex + 3);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">FEATURED PRODUCTS</h2>
      <div className="flex justify-between items-center">
        {/* Left Button */}
        <button
          className={`p-2 rounded-full ${
            activeIndex === 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
          onClick={handlePrevious}
          disabled={activeIndex === 0}
        >
          <FaArrowCircleLeft className="text-4xl text-white" />
        </button>

        {/* Products */}
        <div className="flex space-x-4 px-8">
          {displayedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Right Button */}
        <button
          className={`p-2 rounded-full ${
            activeIndex === products.length - 3
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
          onClick={handleNext}
          disabled={activeIndex === products.length - 3}
        >
          <FaArrowCircleRight className="text-4xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Featured;
