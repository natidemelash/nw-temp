// components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import Navbar from "./NavBar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-white">
      <Navbar />
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-pic.jpg" // Replace with your image path
          alt="Cityscape"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="w-1/2 text-center flex flex-col items-start space-y-4">
          <span className="ml-1">Welcome to</span>
          <h1 className="sm:text-5xl md:text-7xl font-bold">GoodayOn</h1>
          <p className="">
            GoodayOn is an efficient and reliable gig marketplace that provides
            high-precision gig matching for domestic help and home repair
            services in Ethiopia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
