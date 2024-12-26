import Image from "next/image";

export default function SubHero() {
  return (
    <>
      <div className="subText text-center mb-8 mt-10">
        <h3 className="text-2xl font-bold mb-4">Browse The Range</h3>
        <p className="text-gray-600">
          Lorems ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="imgArea flex justify-center gap-8">
        {/* Dining Section */}
        <div className="imgOne text-center">
          <Image 
            src="/image.png/dining.png" 
            width={282} 
            height={200} // Added height property
            alt="Dining" 
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-2 text-lg font-medium">Dining</h6>
        </div>

        {/* Living Section */}
        <div className="imgTwo text-center">
          <Image 
            src="/image.png/living.png" 
            width={282} 
            height={200} // Added height property
            alt="Living" 
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-2 text-lg font-medium">Living</h6>
        </div>

        {/* Bedroom Section */}
        <div className="imgThree text-center">
          <Image 
            src="/image.png/bedroom.png" 
            width={282} 
            height={200} // Added height property
            alt="Bedroom" 
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-2 text-lg font-medium">Bedroom</h6>
        </div>
      </div>
    </>
  );
}
