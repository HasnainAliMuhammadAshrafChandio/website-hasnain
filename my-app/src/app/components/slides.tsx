import Image from "next/image";

export default function SlideSection() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] mt-20">
        <div className="slideText pt-9">
          <h4 className="font-extrabold text-[2rem]">50+ Beautiful Rooms Inspiration</h4>
          <p>
            Our designers already made a lot of beautiful prototypes of rooms that
            inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-4 py-2 mt-4 rounded">
            Explores Mores
          </button>
        </div>

        <div className="slideImages flex gap-4 mt-8">
          <Image 
            src="/image.png/Sideinner.png" 
            alt="Sideinner" 
            width={250} 
            height={250} // Add height for proper renderings
            className="rounded-lg shadow-md"
          />
          <Image 
            src="/image.png/Sideinner.png" 
            alt="Sideinner Duplicate" 
            width={250} 
            height={250} // Add height for proper rendering
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}
