"use client"; 

import Image from "next/image";
import { useState } from "react";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/image.png/Images (1).png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/image.png/Images (3).png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/inner.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Sideinner.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/image 8.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images (2).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images (5).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/image 8.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images (2).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Images (5).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/image.png/Images (1).png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/image.png/Images (3).png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/inner.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Sideinner.png",
      description: "A software engineer specializing in backend systems.",
    },
  ];

  // State to control the number of displayed products
  const [visibleCount, setVisibleCount] = useState(8);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more products
  };

  return (
    <div className="products-container mt-10 ">
      <h2 className="text-center p-4 font-bold text-3xl text-gray-800 pb-9">
        Our Products
      </h2>

      {/* Product Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {data.slice(0, visibleCount).map((card, index) => (
          <div
            className="card bg-white shadow-md rounded-lg overflow-hidden"
            key={index}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={282}
              height={282}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="font-bold text-lg mb-2">{card.name}</h5>
              <p className="text-gray-600 mb-2">{card.description}</p>
              <h5 className="font-bold text-lg text-[#B88E2F]">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < data.length && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={showMoreProducts}
            className="productBtn text-[#B88E2F] px-6 py-2 border-2 border-[#B88E2F] rounded-lg hover:bg-[#B88E2F] hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
