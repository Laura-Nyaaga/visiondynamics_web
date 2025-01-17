import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="bg-[#1b2450] text-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-center gap-6 justify-between mx-16 rounded-2xl h-[100%]" id="home">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Reliable Assistance, Outstanding Value.
          </h1>
          <p className="text-lg mb-8">
            Vision Dynamics is committed to transforming the Healthcare sector
            with innovative technologies and personalized solutions.
          </p>
          <button className="bg-[#71C3DA] hover:bg-[#6E7692] text-white py-2 px-4 rounded">
            Get In Touch
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/image/hero_image.png"
            alt="Healthcare professionals"
            className="w-full rounded-lg shadow-lg"
            width={450}
            height={354}
          />
        </div>
      </div>
    </section>
  );
};
export default HomePage;
