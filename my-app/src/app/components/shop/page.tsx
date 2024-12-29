import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";
import SubHero from "../subhero";

export default function ShopHero() {
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
      image: "/image.png/living.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/image.png/Images (4).png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image.png/Sideinner.png",
      description: "A software engineer specializing in backend systems.",
    },
  ];

  return (
    <>
      {/* Shop Hero Section */}
      <div className="relative">
        <Image
          src="/image.png/Images (4).png"
          alt="Shop Hero Image"
          width={300}
          height={300}
        />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center bg-slate-100">
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>
      <SubHero />
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {data.map((card, index) => (
          <div className="card bg-white shadow-md rounded-lg" key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image}
              alt={card.name}
              width={288}
              height={288}
              className="card-img-top rounded-t-lg"
            />
            <div className="card-body p-4">
              <h5 className="card-title font-bold text-lg">{card.name}</h5>
              <p className="card-text text-gray-600">{card.description}</p>
              <h5 className="card-title font-bold text-lg">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mb-6">
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-black font-bold rounded">1</button>
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-black font-bold rounded">2</button>
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-black font-bold rounded">3</button>
        <button className="w-[4rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-black font-bold rounded">Next</button>
      </div>
      <div className="flex justify-evenly items-center p-4 bg-[#F9F1E7]">
        <div className="text-center">
          <Image src="/image.png/Images (4).png" width={40} height={40} alt="High Quality Icon" />
          <h4 className="font-bold">High Quality</h4>
          <p className="text-sm">Crafted from top materials</p>
        </div>
        <div className="text-center">
          <Image src="/image.png/Images (4).png" width={40} height={40} alt="Warranty Protection Icon" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p className="text-sm">Over 2 years</p>
        </div>
        <div className="text-center">
          <Image src="/image.png/Images (4).png" width={40} height={40} alt="Free Shipping Icon" />
          <h4 className="font-bold">Free Shipping</h4>
          <p className="text-sm">Order over $150</p>
        </div>
        <div className="text-center">
          <Image src="/image.png/Images (4).png" width={40} height={40} alt="24/7 Support Icon" />
          <h4 className="font-bold">24/7 Support</h4>
          <p className="text-sm">Dedicated Support</p>
        </div>
      </div>
    </>
  );
}
