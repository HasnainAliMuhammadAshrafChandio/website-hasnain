import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/image.png/Hero.png"
          alt="Hero"
          width={300}
          height={300}
          priority
        />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-bold text-[1.5rem]">Contact</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="text-center w-15 mt-3">
        <h2 className="font-extrabold text-[2rem]">Get In Touch With Us</h2>
        <p>
          For more information about our products & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>
      </div>

      {/* Contact Information & Form */}
      <div className="flex justify-evenly mt-6">
        {/* Contact Information */}
        <div className="w-[14rem]">
          <div className="flex gap-3 mb-4">
            <FaLocationDot size={24} />
            <div>
              <h2 className="font-bold">Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <TbPhoneFilled size={24} />
            <div>
              <h2 className="font-bold">Phone</h2>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex gap-3">
            <TbClockHour4Filled size={24} />
            <div>
              <h2 className="font-bold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-gray-200 border-2 p-2 rounded-md w-[17rem]"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-200 border-2 p-2 rounded-md w-[17rem]"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="border-gray-200 border-2 p-2 rounded-md w-[17rem]"
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-bold">
                Message
              </label>
              <textarea
                id="message"
                className="border-gray-200 border-2 p-2 rounded-md w-[17rem]"
                placeholder="Hi! I’d like to ask about..."
                rows={4}
                required
              />
            </div>
            <button className="bg-[#B88E2F] text-white mt-3 p-3 w-[7rem] rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 mb-5 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        {[
          {
            img: "/Group.png",
            title: "High Quality",
            description: "Crafted from top materials",
          },
          {
            img: "/warr.png",
            title: "Warranty Protection",
            description: "Over 2 years",
          },
          {
            img: "/vector.png",
            title: "Free Shipping",
            description: "Order over $150",
          },
          {
            img: "/customer.png",
            title: "24/7 Support",
            description: "Dedicated support",
          },
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <Image
              src={feature.img}
              width={40}
              height={40}
              alt={feature.title}
            />
            <h4 className="font-bold">{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
