import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero sections visibles only on desktop */}
      <div className="relative heroImage hidden md:block">
        <Image
          src={"/image.png/Hero.png"}
          width={1440}
          height={100}
          alt="Hero"
          className="w-full h-auto"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] p-4 md:p-8 rounded-lg text-center max-w-[90%] md:max-w-[50%]">
          <h6 className="text-sm md:text-base font-semibold">New Arrival</h6>
          <h3 className="text-lg md:text-2xl font-bold my-2">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-xs md:text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore
          </p>
          <Link href="/buynow">
            <button className="buyBtn bg-[#B88E2F] text-white py-2 px-4 rounded text-sm md:text-base">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
