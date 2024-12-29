import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/image.png/Hero.png"
          alt="Cart Hero Image"
          width={300}
          height={300}
        />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Cart</h3>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <div className="productDetails flex justify-around items-center p-4 w-[60%] h-[4rem] bg-[#F9F1E7] mx-auto">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>

        <div className="mt-5">
          <div className="flex justify-evenly gap-4 items-center mx-auto w-[60%]">
            <Image
              src="/image.png/Images (4).png"
              width={50}
              height={50}
              alt="Asgaard Sofa"
            />
            <p>Asgaard Sofa</p>
            <p>Rs. 250,000.00</p>
            <input
              type="number"
              className="border border-gray-400 rounded w-[4rem] text-center"
              min={1}
              defaultValue={1}
            />
            <p>Rs. 250,000.00</p>
          </div>

          {/* Cart Totals */}
          <div className="cartTotal bg-[#F9F1E7] text-center mx-auto w-[20rem] h-[15rem] mt-10 pt-10 rounded-lg shadow-lg">
            <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
            <p>
              <span className="font-bold">Subtotal: </span>Rs. 250,000.00
            </p>
            <p>
              <span className="font-bold">Total: </span>Rs. 250,000.00
            </p>
            <button className="mt-5 rounded-md border-gray-900 border-2 p-2 px-4">
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 flex justify-evenly items-center p-4 w-full h-[8rem] bg-[#F9F1E7]">
        <div className="text-center">
          <Image
            src="/Group.png"
            width={40}
            height={40}
            alt="High Quality Icon"
          />
          <h4 className="font-bold">High Quality</h4>
          <p>Crafted from top materials</p>
        </div>
        <div className="text-center">
          <Image
            src="/warr.png"
            width={40}
            height={40}
            alt="Warranty Protection Icon"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="text-center">
          <Image
            src="/vector.png"
            width={40}
            height={40}
            alt="Free Shipping Icon"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over $150</p>
        </div>
        <div className="text-center">
          <Image
            src="/customer.png"
            width={40}
            height={40}
            alt="24/7 Support Icon"
          />
          <h4 className="font-bold">24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
